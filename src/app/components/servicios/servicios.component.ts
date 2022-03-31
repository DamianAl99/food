import { TypeofExpr } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Precios } from "../../Services/Precios";

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  public editarURLWhatsApp: string;
  public totalComida: number;
  public precios: object;
  constructor() {
    this.precios = Precios;
    this.editarURLWhatsApp = "https://api.whatsapp.com/send?phone=595972435586&text=TEXTO";
   }

  ngOnInit(): void {

  }
  sumar(id:number): any{
    this.precios[id-1].cantidad = this.precios[id-1].cantidad+1;
  }
  restar(id:number): any{
    if(this.precios[id-1].cantidad <= 0){
      this.precios[id-1].cantidad = 0;
    }else{
      this.precios[id-1].cantidad = this.precios[id-1].cantidad-1;
    }
  }
  CalcularTotal(id: number): any{
    if(this.precios[id-1].cantidad == 0){ alert("Agrega la cantidad"); return; }
    this.totalComida = this.precios[id-1].cantidad * this.precios[id-1].precio;
    
    this.EnviarWhatsapp();
  }

  EnviarWhatsapp(){
    let text = "Hola! le saludamos de Jaumina Food, el pedido elegido alcanza el costo de ";
    for(var i = 0; i < text.length; i++){
      text = text.replace(" ", "%20");
    }
    console.log(text);
    
    this.editarURLWhatsApp = this.editarURLWhatsApp.replace("TEXT", text+this.totalComida.toString()+"gs");

    console.log(this.editarURLWhatsApp);
    window.location.href= this.editarURLWhatsApp;
  }


}
