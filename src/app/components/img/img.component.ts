import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  @Input() img: string = 'valor inicial';
  @Input('account-id') id: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
