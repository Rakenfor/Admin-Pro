import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Dasboard', url:'/dashboard'},
        {title: 'progress', url:'/progress'},
        {title: 'Graphics', url:'/graphics1'},
        {title: 'Promesas', url: '/promesas'},
        {title: 'rxjs', url: '/rxjs'}
    ]
    },
    {
      title: 'Matenimiento',
      icon: 'mdi mdi-folder-lock-open',
      submenu: [
        {title: 'Usuarios', url: '/users'},
        {title: 'Médicos', url: '/medics'},
        {title: 'Hospitales', url: '/hospitals'},
      ]
    }
  ];
  constructor() { }
}
