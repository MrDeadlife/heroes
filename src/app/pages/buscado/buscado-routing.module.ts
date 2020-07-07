import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscadoComponent } from './buscado.component';

const routes: Routes = [{ path: '', component: BuscadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscadoRoutingModule { }
