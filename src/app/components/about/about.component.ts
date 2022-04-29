import { Component, OnInit } from '@angular/core';
import { topWindow } from 'src/app/Services/TopWindow';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  DoTopWindows(){
    topWindow();
  }

}