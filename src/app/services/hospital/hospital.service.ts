import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Hospital } from '../../models/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { 
    console.log('Hospital services funciona');
  }

  //obtener hospitales
  getHospitals(){
    let url = URL_SERVICES + '/hospitals';

    return this.http.get(url);

  }

  createHospital(name: string){
    let url = URL_SERVICES + '/hospitals';

    return this.http.post(url, {name: name}, {headers: {'token': this.userService.token}});
  }

  removeHospital(id: string){
    let url = URL_SERVICES + '/hospitals/' + id;
    return this.http.delete(url, {headers: {token: this.userService.token } });
  }

  updateHospital(id: string, name: string){
    let url = URL_SERVICES + '/hospitals/' + id;

    return this.http.put(
      url, 
      { name: name}, 
      { headers: { token: this.userService.token }} , 
      );
  }

  searchHospitals(item: string){
    let url = URL_SERVICES + '/search/collections/hospitals/' + item;

    return this.http.get(url);

  }
}
