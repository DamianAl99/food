import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { emailDTO } from '../models/emailDTO';

@Injectable({
  providedIn: 'root'
})
export class SendMail {

  URL_sendMail: string;

  formSendMail: emailDTO = {
    mailUser: "",
    message: ""
  };

  constructor(private _http: HttpClient) {
    this.URL_sendMail = 'https://api-sendmail44.herokuapp.com/'
  }

  SendEmail(form){
    return this._http.post(this.URL_sendMail+"send", form);
  }
}
