import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../services/guards/login.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { UserComponent } from './user/user.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { MedicsComponent } from './medics/medics.component';
import { MedicComponent } from './medics/medic.component'

const pagesRouts: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {title:'DashBoard'} },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress' } },
      { path: 'graphics1', component: Graphics1Component, data: { title: 'Graphics' } },
      { path: 'promesas', component: PromesasComponent, data: { title: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' } },
      { path: 'account-settings', component: AccoutSettingsComponent, data: { title: 'Acount Settings' } },
      { path: 'perfil', component: PerfilComponent, data: {Title: 'Perfil de usuario' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

      //Mantenimientos
      { path: 'users', component: UserComponent,  data: { title: 'Mantenimiento de usuarios' } },
      { path: 'hospitals', component: HospitalsComponent, data: { title: 'Matenimiento de hospitales' } },
      { path: 'medics', component: MedicsComponent, data: {title: 'Matenimiento de medicos' } },
      { path: 'medics/:id', component: MedicComponent, data: {title: 'Actualizar medico'} },
    ]
  },

]

export const PAGES_ROUTES = RouterModule.forChild(pagesRouts);
