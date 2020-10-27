import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
import { AdminGuard } from './guards/admin.guard';

import { 
  SettingsService, 
  SidebarService, 
  SharedService, 
  UploadService,
  UserService,
  LoginGuard,
  HospitalService,
  MedicService
} from "./service.index";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService, 
    SidebarService, 
    SharedService,
    UserService,
    LoginGuard,
    UploadService,
    ModalUploadService,
    HospitalService,
    MedicService,
    AdminGuard
  ]
})
export class ServiceModule { }
