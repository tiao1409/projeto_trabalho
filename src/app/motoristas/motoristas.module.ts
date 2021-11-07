import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotoristasRoutingModule } from './motoristas-routing.module';
import { MotoristasComponent } from './motoristas.component';
import { HttpClientModule } from '@angular/common/http';
import { MotoristasCadastroComponent } from './motoristas-cadastro/motoristas-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MotoristasComponent,
    MotoristasCadastroComponent
  ],
  imports: [
    CommonModule,
    MotoristasRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbButtonsModule,
  ],
  exports: [
    MotoristasComponent,
  ]
})
export class MotoristasModule { }
