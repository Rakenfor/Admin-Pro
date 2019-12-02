import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styles: []
})
export class BoosterComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  //pasar valores a este como hijo
  @Input() legend: string ='Legend';
  @Input("renameProgress") progress: number = 50;

  //notificar al padre para el progreso
  @Output()  cambioValor: EventEmitter<number> = new EventEmitter();



  constructor() {
    //console.log('legend', this.legend);
    //console.log('progres', this.progress);
   }

  ngOnInit() {
    //console.log('progres', this.progress);

  }

  onChages(event: number) {

    //let elementHTML: any = document.getElementsByName('progress')[0];

    console.log(this.txtProgress);

    if(event>100)
      this.progress=100;
    else if(event<0)
      this.progress = 0
    else
      this.progress=event;

    //elementHTML.value = this.progress;
    this.txtProgress.nativeElement.value = this.progress;

    this.cambioValor.emit(this.progress);

    //Para poner el foco
    this.txtProgress.nativeElement.focus();
  }

  cambiarValor(valor: number) {
    this.progress = this.progress + valor;
    if (this.progress >= 105 || this.progress <= -5){
      this.progress = this.progress - valor;
    }

    //emitir el progreso en este momento
    this.cambioValor.emit(this.progress);
  }
}
