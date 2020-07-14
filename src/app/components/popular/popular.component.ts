import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  public infos: any;
  public btnEjopy: boolean;

  constructor() {

    this.btnEjopy = false;

    this.infos = [
      {}
  ]
   }

  ngOnInit(): void {
  }

  ejopyStatus(){
    if (this.btnEjopy == false) {
      this.btnEjopy = true;
    }else{
      this.btnEjopy = false;
    }
  }

}
