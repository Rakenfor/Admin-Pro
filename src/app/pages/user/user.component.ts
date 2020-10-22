import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';
import * as swal from 'sweetalert';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  skip: number = 0;
  limit: number = 5;
  total: number = 0;
  cargando: boolean = false;
  disable: boolean = false;

  constructor(
    public userService: UserService,
    public modalUploadService: ModalUploadService
  ) { }

  ngOnInit(): void {
    this.chageUsers();
    this.modalUploadService.notify
                          .subscribe((resp: any ) => {
                            resp = JSON.parse(resp)
                            this.users.forEach(user=>{
                              if(user._id === resp.user._id){
                                user.img = resp.user.img;
                              }
                            })
                          });
  }

  chageUsers(){

    this.cargando = true;
    this.disable = false;
    this.userService.getUsers(this.skip, this.limit)
                    .subscribe((resp: any)=>{
                      this.total = resp.total;
                      this.users = resp.users;
                      this.cargando = false
                    });
  }

  cambiar(count: number){
    this.limit = count;
    this.skip += count;

    if(this.skip < 0){
      this.skip = 0;
      return;
    }else if (this.skip>this.total){
      this.skip = this.total - this.total%count;
      return;
    }
    
    this.cargando = true;
    this.userService.getUsers(this.skip, this.limit )
                    .subscribe((resp: any)=>{
                      this.total = resp.total;
                      this.users = resp.users;
                      this.cargando = false;
                    })


  }

  searchUser(term: string){

    if(term.length<=0){
      this.chageUsers();
      return;
    }
    this.cargando = true;
    this.disable = true;
    this.userService.searchUser(term)
                    .subscribe((resp: any)=>{
                      this.total = resp.users.length;
                      this.users = resp.users;
                      this.cargando = false;
                    })
  }

  removeUser(user: User){
    if(this.userService.user._id === user._id){
      swal.default('No puede borrar el usuario', 'no se puede borrar a uste mismo', 'error');
      return;
    }

    swal.default({
      title: 'Esta seguro?',
      text: 'Esta a punto de borrar a: ' + user.name,
      icon: 'warning',
      buttons: [true, true],
    })
    .then((delet)=>{
      if(delet){
        this.userService.removeUser(user._id)
                        .subscribe((resp: any)=>{

                          if(resp.ok){
                            swal.default('Usuario borrado', `el usuario ${resp.user.name} fue completamente borrado`, 'success');
                            this.chageUsers();
                          }else{
                            swal.default('No se pudo eliminar', resp.err, 'error');
                          }

                          console.log(resp);

                        });
      }
    });
  }

  saveUser(user: User){
    this.userService.updateUser(user).subscribe((resp: any)=>{
      if(resp.ok){
        swal.default('Usuario actualizado', `El usuario ${resp.user.name} se actualizo`, 'success');
      }else{
        swal.default('Error al actualizar usuario', `El usuario ${resp.user.name} no se pudo actualizar`, 'error');
      }
    });
  }

  mostrarModal(user: User){
    this.modalUploadService.mostrarModal('user', user._id, this.userService.token);
  }

}
