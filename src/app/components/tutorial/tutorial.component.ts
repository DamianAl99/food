import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  public btnEjopy: boolean;

  constructor() {
    this.btnEjopy = false;
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
