import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public btnStatus: boolean;

  constructor(){
    this.btnStatus = false;
  }

  statusBtn(){
    if (this.btnStatus == false){
      this.btnStatus = true;
    }else{
      this.btnStatus = false;
    }
  }
  exitMenu(){
    if (this.btnStatus == false){
      this.btnStatus = true;
    }else{
      this.btnStatus = false;
    }
  }
}
