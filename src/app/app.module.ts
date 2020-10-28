import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTES } from './app.routes';

//servicios
import { ServiceModule } from './services/service.module';

//modulo Pages
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    //temporal
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
