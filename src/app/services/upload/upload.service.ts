import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { URL_SERVICES } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  uploadFile(file: File, type: string, id: string, token: string){

    return new Promise((resolve, reject)=>{
      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      
      formData.append('file', file, file.name );
      
      xhr.onreadystatechange = ( )=>{
        
        if(xhr.readyState===4){
          if(xhr.status === 200){
            console.log('Imagen subida');
            resolve(xhr.response)
          }else{
            console.log('Fallo la subida');
            reject(xhr.response)
          }
        }
      };
      
      let url = URL_SERVICES + `/upload/${type}/${id}`;
      
      xhr.open('PUT', url, true);
      xhr.setRequestHeader('token', token);
      xhr.send(formData);

    })
  };

  
}
