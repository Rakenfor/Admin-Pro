import { Component, OnInit } from '@angular/core';
import { Medic } from '../../models/medic.model';
import { MedicService } from '../../services/service.index';
import * as swal from 'sweetalert';

@Component({
  selector: 'app-medics',
  templateUrl: './medics.component.html',
  styleUrls: ['./medics.component.css']
})
export class MedicsComponent implements OnInit {

  total: number = 0;
  cargando: boolean;
  medics: Medic[] = [];
  constructor(
  public medicService: MedicService
  ) { }

  ngOnInit(): void {
    this.getMedics();
  }


  getMedics(){
    this.cargando = true;
    this.medicService.getMedics().subscribe((resp: any) => {
      this.medics = resp.medics;
      this.total = this.medics.length;
      this.cargando = false;
      console.log(resp);
    });
  }

  searchMedic(item: string){

    if(item){
      this.cargando = true
      this.medicService.searchMedic(item).subscribe((resp: any)=>{
        
        this.medics = resp.medics;
        this.total = this.medics.length;
        this.cargando = false;
      });
    }else{
      this.getMedics();
    }

  }

  updateImage(medic: Medic){

  }

  removeMedic(medic: Medic){
    this.medicService.removeMedic(medic._id)
                      .subscribe((resp: any) => {
                        console.log(resp);
                        if(!resp.medic){
                          swal.default('Error!','El médico no se  pudo borrar', 'error');
                          return;
                        }
                        this.medics = this.medics.filter((medic) => medic._id != resp.medic._id );
                        this.total = this.medics.length;
                      });
  }

  addMedic(){

  }

}
