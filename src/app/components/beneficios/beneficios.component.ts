import { Component, OnInit } from '@angular/core';
import { topWindow } from 'src/app/Services/TopWindow';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  DoTopWindows(){
    topWindow();
  }
}
