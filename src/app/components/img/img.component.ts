import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';
  @Input('image')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img');
  }
  @Input() alt: string = '';
  @Input('account-id') id: string = '0';
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = '../../assets/images/default.png';
  //counter: number = 0;
  //counterFunction: number | undefined;

  constructor() {
    //corre antes del render
    //no recomendado correr cosas async
    //única ejecución
    console.log('constructor', 'imgValue=>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //antes y durante
    //actualizar cambios en inputs
    //corre el numero de veces que se actualicen los inputs del componente
    console.log('onChanges', 'imgValue=>', this.img);
    console.log(changes);
  }

  ngOnInit(): void {
    //antes del render
    //lugar adecuado para async
    //única ejecución
    console.log('onInit', 'imgValue=>', this.img);
    //this.counterFunction = window.setInterval(() => {
    //  this.counter += 1;
    //  console.log('counter running');
    //}, 1000);
  }

  ngAfterViewInit(): void {
    //después del render
    //aquí se manejan los hijos
    console.log('AfterViewInit');
  }

  ngOnDestroy(): void {
    //cuando se elimina el componente
    console.log('ngOnDestroy');
    //window.clearInterval(this.counterFunction);
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoad() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
