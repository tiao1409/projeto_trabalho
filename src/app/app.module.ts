import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotoristasModule } from './motoristas/motoristas.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { CargasModule } from './cargas/cargas.module';
import { FrotasModule } from './frotas/frotas.module';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuPrincipalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MotoristasModule,
    CargasModule,
    FrotasModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
