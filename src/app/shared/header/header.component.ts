import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit(
  ) {
  }

  search(value: string){
    this.router.navigate(['/search', value]);
  }

}
