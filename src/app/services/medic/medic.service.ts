import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class MedicService {

  constructor(
    public http: HttpClient,
    public usersService: UserService
  ) { }

  getMedics(){
    let url = URL_SERVICES + '/medics'
    return this.http.get(url);
  }

  searchMedic(item: string){
   let url = URL_SERVICES +  '/search/collections/medics/' + item;
   return this.http.get(url);

  }

  getMedic(id: string){
    let url = URL_SERVICES + '/medics/'+id;
    return this.http.get(url);
  }

  removeMedic(id: string){
    let url = URL_SERVICES + '/medics/' + id;
    return this.http.delete(url, {headers: {token: this.usersService.token } });
  }

  createMedic(name: string, hospitalId: string){
    let url = URL_SERVICES + '/medics';
    return this.http.post(
        url, 
        { name: name, hospital: hospitalId  }, 
        { headers: 
          { token: this.usersService.token }
        } 
      );
  }

  updateMedic(id: string, name: string, hospitalId: string){
    let url = URL_SERVICES + '/medics/' + id;
    return this.http.put(
        url, 
        { name: name, hospital: hospitalId }, 
        {headers: 
          {'token': this.usersService.token}
        }
      );
  }

}
