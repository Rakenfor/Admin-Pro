import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import * as swal from 'sweetalert';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {

  user: User;
  imageUpload: File = null;
  imgTemp: any;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

  save(user: User){
    console.log(user);

    this.user.name = user.name,
    this.user.email = user.email

    this.userService.updateUser(this.user).subscribe((resp: any)=>{
      console.log(resp);
    });
  }

  selectionImage(file: File){
    console.log(file);

    if(!file){
      this.imageUpload = null;
      return;
    }

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
    this.userService.updateImage(this.imageUpload, this.user._id);
  }

}
