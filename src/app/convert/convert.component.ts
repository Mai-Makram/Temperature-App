import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
  
  fehrenhit:number=0
  Celises:number =0

  constructor() { }

  ngOnInit(): void {
  }

}
