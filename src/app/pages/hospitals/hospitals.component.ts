import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HospitalService } from '../../services/service.index';
import * as swal from 'sweetalert';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { UploadService } from '../../services/upload/upload.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  total: number = 0;
  hospitals: Hospital[] = [];
  cargando: boolean;
  newHospital: Hospital;

  constructor(
    public hospitalServices: HospitalService,
    public modalUploadService: ModalUploadService,
    public uploadService: UploadService,
    public userService: UserService,
  ) { 
  }

  ngOnInit(): void {
    this.chageHospitals();

    this.modalUploadService.notify
                          .subscribe((resp: any)=>{
                            resp = JSON.parse(resp);
                            if(!resp.hospital){
                              return;
                            }
                            this.hospitals.forEach((hospital)=>{
                              if(hospital._id === resp.hospital._id){
                                hospital.img = resp.hospital.img;
                              }
                            })
                          });
    
  }
  
  searchHopital(item: string){
    if(item){
      this.hospitalServices.searchHospitals(item).subscribe((resp: any)=>{
        this.hospitals = resp.hospitals;
        this.total = this.hospitals.length;
      });
    }else{
      this.chageHospitals();
    }
  }
  
  removeHospital(hospital: Hospital){
    this.hospitalServices.removeHospital(hospital._id)
    .subscribe((resp: any)=>{
      console.log(resp);
      if(resp.ok){
        swal.default('Hospital agregado', `El hospital " ${resp.hospital.name}" a borrado`, 'success');
                              this.hospitals = this.hospitals.filter((hospital)=>hospital._id != resp.hospital._id);
                              this.total -= 1;
                              return;
                            }

                            swal.default('Hospital no agregado', `El hospital " ${resp.hospital.name}" no pudo ser borrado`, 'error');
                            
                          });
  }
  
  saveHospital(hospital: Hospital){
    this.hospitalServices.updateHospital(hospital._id, hospital.name).subscribe((resp: any) => {
      if(resp.ok){
        swal.default('Hospital Actualizado', `el nombre del hospital a sido actualizado`, 'success');
        return;
      }

      swal.default('Hospital no actualizado', 'A ocurrido un error', 'error');
    });

  }

  chageHospitals(){
    this.cargando = true;
    this.hospitalServices.getHospitals().subscribe((resp: any)=>{
      this.hospitals = resp.hospitals;
      this.cargando = false;
      this.total = resp.total;
    });
  }
  
  addHopital(name: string){
    if(!name){
      swal.default('Nombre no válido', 'El nombre del hospital está vacio', 'error');
      return;
    }

    this.hospitalServices.createHospital(name).subscribe((resp: any)=>{
      if(resp.ok){
        swal.default('Hospital agregado', `El hospital " ${resp.hospital.name}" a sido agregado`, 'success');
        this.hospitals.push(resp.hospital)
        this.total+=1;
      }else{
        swal.default('Hospital no pudo ser agregado', 'success');
      }

    });

  }

  updateImage(hospital: Hospital){
    this.modalUploadService.mostrarModal('hospital', hospital._id, this.userService.token);
  }

}
