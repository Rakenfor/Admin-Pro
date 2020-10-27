import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { User } from '../../models/user.model';
import { Hospital } from '../../models/hospital.model';
import { Medic } from 'src/app/models/medic.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: User[] = [];
  medics: Medic[] = [];
  hospitals: Hospital[] = []

  constructor(
    public activateRoute: ActivatedRoute,
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
                      .subscribe(params => {
                        let term = params['term'];
                        this.search(term)
                      })
  }

  search(term: string){
    let url = URL_SERVICES + '/search/' + term;

    this.http.get(url)
    .subscribe((resp: any) => {
      this.hospitals = resp.results.hospitals;
      this.medics = resp.results.medics;
      this.users = resp.results.users;
    });
  }

}
