import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  heroe: any = {

  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroService: HeroService
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroService.gethero(params['id']);
    })

  }

  ngOnInit() {

  }
}
