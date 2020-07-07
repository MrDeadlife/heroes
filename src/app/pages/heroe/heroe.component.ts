import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:any ={

  }

  constructor( private activatedRoute:ActivatedRoute,
                private _heroService: HeroService        
    ) { 

    this.activatedRoute.params.subscribe(params=>{
      this.heroe = this._heroService.gethero(params['id']);
    })

  }

  ngOnInit() {

  }

}