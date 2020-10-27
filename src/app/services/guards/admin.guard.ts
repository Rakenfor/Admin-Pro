import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../user/user.service';
import * as swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    public userService: UserService,
  ){

  }

  canActivate(){

    if ( this.userService.user.role === 'ADMIN_ROLE'){
      return true;
    }else{
      swal.default('No tiene permisos', 'Usted no tiene permisos para esto','error')
      this.userService.logout();
    }



  }
}
