import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    //para escuchar se deve suscribir
    this.subscription = this.obserbable().subscribe(
      num=>console.log('Subs', num),
      error =>console.error('Error en el subs',error),
      () => console.log('el obserbador terminó')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("La pagina se va a cerrar");
    this.subscription.unsubscribe();
  }

  obserbable(): Observable<any> {
    return new Observable((observer: Observer<any>) => {

      let count = 0;
      let interval = setInterval(() => {

        count++;

        const exit = {
          valor: count
        };

        //cada vez que llega informacion para notificar al codigo
        observer.next(exit);

        //detener el contador
        //if (count === 3) {
        //  clearInterval(interval);
        //terminar la subscripcion
        //  observer.complete();
        //}


      }, 1000);
    }).pipe(
      map( resp => resp.valor),
      filter((valor,index)=>{
        if((valor%2)===1)
          return true;
        else
          return false;
      })
    )
  }
}
