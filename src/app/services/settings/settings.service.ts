import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings ={
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document ) {
    this.loadSettings();
   }
  saveSettings(){

    //JSON.stringfy pasa culquier objeto a cadena.
    localStorage.setItem('settings',JSON.stringify(this.settings));
  }

  loadSettings(){
    if(localStorage.getItem('settings')){
      this.settings = JSON.parse(localStorage.getItem('settings'));
      this.applytheme(this.settings.theme);
    }
  }

  applytheme(value: string){
    let url = `assets/css/colors/${value}.css`
    this._document.getElementById('theme').setAttribute('href', url);

    this.settings.themeUrl = url;
    this.settings.theme = value;
    this.saveSettings();
  }
}

interface Settings{
  themeUrl: string;
  theme: string;
}
