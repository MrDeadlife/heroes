import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService, IHero } from '../../hero.service';
@Component({
  selector: 'app-buscado',
  templateUrl: './buscado.component.html',
  styleUrls: ['./buscado.component.css']
})
export class BuscadoComponent implements OnInit {

  heroes: IHero[];
  termino: string;
  //dentro del constructor se llaman las importaciones para ser utilizadas dentro del componente donde la llamamos
  constructor(private activatedroute: ActivatedRoute,
    private __serviceHero: HeroService
  ) {

  }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      //this.termino = params['termino'];
      //console.log(params['termino']);
      
      //this.__serviceHero.buscarheroe(params['termino']);
      this.heroes = this.__serviceHero.buscarheroe(params['termino']);
      //console.log(this.heroes);
    });
  }

}