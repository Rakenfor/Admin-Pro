import { Component, OnInit, Inject} from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {
  constructor(public _settings: SettingsService) {}

  ngOnInit() {
    this.apllyCheck();
  }

  chageColor(value: string, link: any) {

    this.apllyCheck1(link);
    this._settings.applytheme(value);
  }

  apllyCheck1(link: any){
    let selectors: any = document.getElementsByClassName('selector');
    for(let ref of selectors)
      ref.classList.remove('working');
      link.classList.add('working')
  }

  apllyCheck(){
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settings.settings.theme;

    for (let ref of selectors ){
      if(ref.getAttribute('data-theme')===theme){
        ref.classList.add('working')
        break;
      }
    }
  }

}
