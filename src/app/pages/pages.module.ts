import { NgModule } from "@angular/core";
import {FormsModule} from "@angular/forms"
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


//temporal


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    BoosterComponent,
    GraphicDoughnutComponent,
    AccoutSettingsComponent
  ],

  exports: [DashboardComponent, ProgressComponent, Graphics1Component],
  imports: [SharedModule, PAGES_ROUTES, FormsModule, ChartsModule]
})
export class PagesModule {}
