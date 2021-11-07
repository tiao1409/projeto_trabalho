import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargasRoutingModule } from './cargas-routing.module';
import { CargasComponent } from './cargas.component';
import { HttpClientModule } from '@angular/common/http';
import { CargasCadastroComponent } from './cargas-cadastro/cargas-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CargasComponent,
    CargasCadastroComponent
  ],
  imports: [
    CommonModule,
    CargasRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbButtonsModule,
  ],
  exports: [
   CargasComponent,
  ]
})
export class CargasModule { }
