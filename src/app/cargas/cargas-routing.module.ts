import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargasCadastroComponent } from './cargas-cadastro/cargas-cadastro.component';
import { CargasComponent } from './cargas.component';

const routes: Routes = [
  {
    path: '',
    component: CargasComponent
  },
  {
    path: 'cadastro',
    component: CargasCadastroComponent,
  },
  {
    path: 'edicao/:id',
    component: CargasCadastroComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargasRoutingModule { }
