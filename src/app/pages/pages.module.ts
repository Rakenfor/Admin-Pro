import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { BoosterComponent } from '../components/booster/booster.component';

//gráficas ng2-charts
import { ChartsModule } from "ng2-charts";
import { GraphicDoughnutComponent } from '../components/graphic-doughnut/graphic-doughnut.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { PerfilComponent } from './perfil/perfil.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';


//temporal


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    BoosterComponent,
    GraphicDoughnutComponent,
    AccoutSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    PerfilComponent,
    UserComponent,
    ModalUploadComponent
  ],

  exports: [
    DashboardComponent, 
    ProgressComponent, 
    Graphics1Component
  ],
  imports: [
    CommonModule,
    SharedModule, 
    PAGES_ROUTES, 
    FormsModule, 
    ChartsModule,
    PipesModule,
    ReactiveFormsModule
  
  ]
})
export class PagesModule {}
