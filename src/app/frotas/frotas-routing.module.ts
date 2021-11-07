import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrotasCadastroComponent } from './frotas-cadastro/frotas-cadastro.component';
import { FrotasComponent } from './frotas.component';

const routes: Routes = [
  {
    path: '',
    component: FrotasComponent
  },
  {
    path: 'cadastro',
    component: FrotasCadastroComponent,
  },
  {
    path: 'edicao/:id',
    component: FrotasCadastroComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrotasRoutingModule { }
