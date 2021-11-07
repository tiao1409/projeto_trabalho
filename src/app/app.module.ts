import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotoristasModule } from './motoristas/motoristas.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrotasComponent } from './frotas/frotas.component';

@NgModule({
  declarations: [
    AppComponent,
    //FrotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MotoristasModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
