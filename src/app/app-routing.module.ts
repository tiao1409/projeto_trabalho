import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MenuComponent } from './menu/menu.component';

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
    
  },
  {
    path: 'menu',
    component: MenuComponent,
    
  },
  {
    path: '**',
    component: MenuPrincipalComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
