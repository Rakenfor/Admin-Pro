import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from '../../services/hospital/hospital.service';
import { Hospital } from '../../models/hospital.model';
import { MedicService } from '../../services/medic/medic.service';
import * as swal from 'sweetalert';
import { Medic } from 'src/app/models/medic.model';
import { ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { UserService } from '../../services/service.index';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.css']
})
export class MedicComponent implements OnInit {

  hospitals: Hospital[] = [];
  hospital: Hospital = new Hospital(null, null ,null );
  medic: Medic = new Medic('', null, null, this.hospital);
  constructor(
    public hospitalService: HospitalService,
    public medicService: MedicService,
    public activateRout: ActivatedRoute,
    public modalUploadService: ModalUploadService,
    public userService: UserService
  ) {
    activateRout.params.subscribe(params => {
      let id = params.id;
      if( id!== 'nuevo'){
        this.chageMedic(id);
      }
    });

   }

  ngOnInit(): void {
    this.hospitalService.getHospitals()
                        .subscribe((resp: any) => {
                          this.hospitals = resp.hospitals;
                        });
                        
  this.modalUploadService.notify
                        .subscribe((resp: any) => {
                             resp = JSON.parse(resp)
                             console.log(resp);
                             this.medic.img = resp.medic.img;
                           });

  }

  saveMedic(f: NgForm){
    if( f.valid ){

      if(this.medic._id){
        this.medicService.updateMedic(this.medic._id, f.value.medic, f.value.Hospital)
                          .subscribe((resp: any) => {
                            console.log(resp);
                            swal.default('Medico Actualizado ', `el medico ${resp.medic.name} a sido actualizado`, 'success');
                            this.medic.name = resp.medic.name,
                            this.hospital.name = resp.medic.hospital.name
                          });
        return;
      }

      this.medicService.createMedic(f.value.medic, f.value.hospital )
                        .subscribe((resp: any) => {
                          if(resp.ok){
                            swal.default('Medico creado', `El medico ${resp.medic.name} a sido creado`, 'success');
                            f.value.medic = '';
                            f.value.hospital = '';
                            return;
                          }
                          swal.default('Medico no creado', `Ha ocurrido un error`, 'error');

                        });
    }

  }
  cambioHospital(event){
        this.hospital = this.hospitals.filter((hospital)=>hospital._id === event.target.value)[0];
        console.log(this.hospital);
  }

  chageMedic(id: string){
    this.medicService.getMedic(id).subscribe((resp: any)=>{
      console.log(resp);
      if(resp.ok){
        this.medic = resp.medic[0];
        this.hospital = this.medic.hospital;
        console.log("hospital", this.hospital);
      }

      console.log(this.medic);
    });
  }

  chagePotho(){
    this.modalUploadService.mostrarModal('medic', this.medic._id, this.userService.token);
  }

}
