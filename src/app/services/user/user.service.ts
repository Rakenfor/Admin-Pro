import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http'
import { URL_SERVICES } from '../../config/config';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  token: String;

  constructor(
    public http: HttpClient,
    public router: Router
  ) { 

    
    try{
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    catch{
      this.user = null;
    }
    this.token = localStorage.getItem('token') || '';

  }

  createUser(user: User){
    let url = URL_SERVICES + '/users'

    return this.http.post(url, user );
  }

  login(user: User, rememberme=false){

    let url = URL_SERVICES + '/login'

    if( rememberme ){
      localStorage.setItem('email', user.email)
    }else{
      localStorage.removeItem('email')
    }

    return this.http.post(url, user)
                    .pipe(map((resp: any)=>{
                      localStorage.setItem('id', resp.user._id)
                      localStorage.setItem('token', resp.token)
                      localStorage.setItem('user', JSON.stringify(resp.user));
                      
                      user = resp.user;
                      this.token = resp.token;

                      return true;
                    }));

  }

  logout(){
    this.user = null,
    this.token = '';

    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('id');

    this.router.navigate(['/login']);

  }

  stateLoged(){
    return this.token.length > 30  ? true : false;
  }
}
