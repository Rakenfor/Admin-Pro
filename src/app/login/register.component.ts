import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as swal from 'sweetalert';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})

export class RegisterComponent implements OnInit {
  
  forma: FormGroup;

  constructor(
    public _userService: UserService,
    public router: Router
    ) { }

  sonIguales(field1: string, field2: string){
    return(group: FormGroup)=>{

      let pass1 = group.controls[field1].value;
      let pass2 = group.controls[field2].value;

      if(pass1 === pass2 ){
        return null;
      }

      return {
        sonIguales: true
      }

    }
    
  }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      conditions: new FormControl( false ),
    }, {validators: this.sonIguales('password', 'password2')} );


    this.forma.setValue({

      name: 'Robert',
      email: 'robert@test.com',
      password: '123456',
      password2: '123456',
      conditions: false

    });
  }
  register(){

    if(this.forma.invalid){
      return;
    }

    if(!this.forma.value.conditions){
      return swal.default('Importante', 'Debe aceptar los terminos y condiciones', 'warning');
    }

    let user = new User(
      this.forma.value.name,
      this.forma.value.email,
      this.forma.value.password
    );

    this._userService.createUser(user).subscribe((resp: any)=>{
      this.router.navigate(['/login'])
    });

  }

}
