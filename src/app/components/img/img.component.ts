import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Input('account-id') id: number = 0;
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = '../../assets/images/default.png';

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoad() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
