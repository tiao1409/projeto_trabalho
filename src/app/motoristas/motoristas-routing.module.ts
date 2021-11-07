import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotoristasCadastroComponent } from './motoristas-cadastro/motoristas-cadastro.component';
import { MotoristasComponent } from './motoristas.component';

const routes: Routes = [
  {
    path: '',
    component: MotoristasComponent
  },
  {
    path: 'cadastro',
    component: MotoristasCadastroComponent,
  },
  {
    path: 'edicao/:id',
    component: MotoristasCadastroComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotoristasRoutingModule { }
