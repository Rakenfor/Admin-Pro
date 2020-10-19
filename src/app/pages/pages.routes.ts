import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../services/guards/login.guard';

const pagesRouts: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {title:'DashBoard'} },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress' } },
      { path: 'graphics1', component: Graphics1Component, data: { title: 'Graphics' } },
      { path: 'promesas', component: PromesasComponent, data: { title: 'Promesas' }},
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' }},
      { path: 'account-settings', component: AccoutSettingsComponent, data: { title: 'Acount Settings' }},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },]
  },

]

export const PAGES_ROUTES = RouterModule.forChild(pagesRouts);
