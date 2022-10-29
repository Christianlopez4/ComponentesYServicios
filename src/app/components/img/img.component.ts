import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Input('account-id') id: number = 0;
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = '../../assets/images/default.png';

  constructor() {
    //corre antes del render
    //no recomendado correr cosas async
    //única ejecución
    console.log('constructor', 'imgValue=>', this.img);

  }

  ngOnChanges(): void {
    //antes y durante
    //actualizar cambios en inputs
    //corre el numero de veces que se actualicen los inputs del componente
    console.log('onChanges', 'imgValue=>', this.img);
  }

  ngOnInit(): void {
    //antes del render
    //lugar adecuado para async
    //única ejecución
    console.log('onInit', 'imgValue=>', this.img);
  }

  ngAfterViewInit(): void {
    //después del render
    //aquí se manejan los hijos
    console.log('AfterViewInit');
  }

  ngOnDestroy(): void {
    //cuando se elimina el componente
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoad() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
