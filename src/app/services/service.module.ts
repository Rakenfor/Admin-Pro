import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SidebarService, SharedService } from "./service.index";
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';7
import { LoginGuard } from './guards/login.guard';

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
    LoginGuard
  ]
})
export class ServiceModule { }
