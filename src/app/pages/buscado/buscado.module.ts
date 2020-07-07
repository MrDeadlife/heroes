import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscadoRoutingModule } from './buscado-routing.module';
import { BuscadoComponent } from './buscado.component';


@NgModule({
  declarations: [BuscadoComponent],
  imports: [
    CommonModule,
    BuscadoRoutingModule
  ]
})
export class BuscadoModule { }
