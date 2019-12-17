import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    //Creando la promesa


    this.countTree().then(
      ()=>console.log("termino"))
      .catch(error => console.error('error en la promesa:', error));
  }

  ngOnInit() {
  }

  //promesa con el tipo volleano
  countTree(): Promise<boolean> {
    return new Promise((resolve, reject) => {

      let count = 0;
      let interval = setInterval(() => {
        count++;
        console.log(count);
        if (count === 3) {
          clearInterval(interval);
          reject(true);
        }
      }, 1000);
    });
  }

}
