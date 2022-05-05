import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SendMail } from 'src/app/Services/SendMail';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Message: string;
  resultSendMail: boolean;

  constructor(public _sendMail: SendMail) {}

  ngOnInit(): void {
  }

  SendEmail(form: NgForm){
    console.log(form.value)
    if(form.value.mailUser == "" || form.value.mailUser == null || form.value.message == "" || form.value.message == null){
      this.Message = "No deje nada vacio!!";
      console.log(this.Message)
      return this.resultSendMail = false;
    }
    if(!this.ValidarEmail(form.value.mailUser)) {
      this.Message = "El correo ingresado es erroneo (Ej Correcto : algo@algo.com)";
      console.log(this.Message)
      return this.resultSendMail = false;
    }
    if(!this.ValidarCommentary(form.value.message)) {
      this.Message = "El comentario ingresado esta incorrecto, no se permiten caracteres como: <|>|script..";
      console.log(this.Message)
      return this.resultSendMail = false;
    }
    this._sendMail.SendEmail(form.value).subscribe(
      res => {this.reset(form); this.Message = "Enviado Correctamente!!"; return this.resultSendMail = true; },
      err => {this.Message = "Hubo un error al enviar el mensaje, Disculpa, Vuelve a intentarlo. Error" +err  ; return this.resultSendMail = false;}
    )
  }

  reset(form: NgForm){
    form.reset();
  }

  ValidarEmail(email: string): boolean{
    const pattern: RegExp = /([\d\w.-_])+\@([\w\d.-_])+\.([\w.])+/;
    if(pattern.test(email)) return true;
    return false;
  }
  ValidarCommentary(commentary: string): boolean{
    const pattern: RegExp = /([<>*])+|(delete)|script|\//;
    if(!pattern.test(commentary)) return true;
    return false;
  }
}
