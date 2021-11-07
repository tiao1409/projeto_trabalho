import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'motoristas',
    loadChildren:() => import ('./motoristas/motoristas.module').then(m => m.MotoristasModule)
    
  },
  {
    path: 'frotas',
    loadChildren:() => import ('./frotas/frotas.module').then(m => m.FrotasModule)
    
  },
  {
    path: 'cargas',
    loadChildren:() => import ('./cargas/cargas.module').then(m => m.CargasModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
