import { Component, OnInit } from '@angular/core';
import { HeroService, IHero } from '../../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: IHero[] = [];
  constructor(private _heroService: HeroService) {

    console.log('constructor')

  }

  ngOnInit() {

    this.heroes = this._heroService.getheroes();

    console.log(this.heroes);

  }

}
