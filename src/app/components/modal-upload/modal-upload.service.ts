import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {

  public type: string;
  public id: string;
  public token: string;
  public oculto: string = 'oculto';

  public notify = new EventEmitter<any>();

  constructor() {

 }

  ocultarModal(){
    this.type = null;
    this.id = null;
    this.token = null;
    this.oculto = 'oculto'
  }

  mostrarModal(type: string, id: string, token: string){

    this.type = type;
    this.id = id;
    this.token = token;
    this.oculto = '';
  }

}
