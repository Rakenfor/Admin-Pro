import { Component, OnInit } from '@angular/core';
import * as swal from 'sweetalert';
import { User } from '../../models/user.model';
import { UploadService } from '../../services/upload/upload.service';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {

  user: User;
  imageUpload: File = null;
  imgTemp: any;
  disabled: boolean = true;

  constructor(
    public uploadService: UploadService,
    public modalUploadService: ModalUploadService
  ) {
    console.log('Modal listo');
   }

  ngOnInit(): void {
  }

  selectionImage(file: File){
    console.log(file);

    
    if(!file){
      this.imageUpload = null;
      return;
    }
    
    this.disabled =  false;

    if( file.type.indexOf('image') < 0){
      swal.default('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      return
    }

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=> this.imgTemp = reader.result;

    this.imageUpload = file;
  }

  saveImage(){
    this.uploadService.uploadFile(
                        this.imageUpload, 
                        this.modalUploadService.type, 
                        this.modalUploadService.id, 
                        this.modalUploadService.token
                      )
                      .then((resp: any)=>{
                        this.modalUploadService.notify.emit(resp);
                        this.coleseModal();
                      })
                      .catch(err=>{
                        console.log(err);
                      });
  }

  coleseModal(){
    this.imgTemp = null;
    this.imageUpload = null;
    this.modalUploadService.ocultarModal();
  }

}
