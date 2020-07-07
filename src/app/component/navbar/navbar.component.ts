import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscarheroe(termino:string){
    console.log(termino);
    //la pleca se pone para que el sistema no haga un append => si no que lo cargue desde la pagina donde esta
    this.router.navigate( ['/buscado', termino] );
  }

}

