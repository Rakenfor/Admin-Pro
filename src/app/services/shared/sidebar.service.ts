import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [  ];
  constructor(
    public userService: UserService
  ) {
    
   }

   //ahora esta directamente desde user service
}
 