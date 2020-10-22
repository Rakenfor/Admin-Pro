import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  title: string;

  constructor(private router: Router,private title1: Title, private meta: Meta) {

    this.getDataRout().subscribe(data=>{
      this.title = data.title;
      this.title1.setTitle(this.title);

      const metaTag: MetaDefinition={
        name: 'Description',
        content: this.title,
      }

      this.meta.updateTag(metaTag);
    });
   }

  ngOnInit() {
  }

  getDataRout(){
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )
  }

}
