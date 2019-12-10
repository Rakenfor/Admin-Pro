import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-guage',
      submenu: [
        {title: 'Dasboard', url:'/dashboard'},
        {title: 'progress', url:'/progress'},
        {title: 'Graphics', url:'/graphics1'}
    ]
    }
  ];
  constructor() { }
}
