import { Component, OnInit } from '@angular/core';
import { topWindow } from 'src/app/Services/TopWindow';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  DoTopWindows(){
    topWindow();
  }

}
