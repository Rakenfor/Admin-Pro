import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';
declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string;

  rememberme: boolean = false

  constructor(
    public router: Router,
    public userService: UserService
    ) { }

  ngOnInit() {
    init_plugins();
    this.email = localStorage.getItem('email') || '';

    if(this.email.length>0){
      this.rememberme = true;
    }
  }

  logIn(forma: NgForm) {

    if(forma.invalid){
      return;
    }

    let user = new User(null, forma.value.email, forma.value.password);
    console.log(forma.value.rememberme)
    this.userService.login(user, forma.value.rememberme).subscribe((resp)=>{
      console.log(resp);
      this.router.navigate(['/dashboard']);
    })
  }

}
