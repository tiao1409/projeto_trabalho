import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrotasRoutingModule } from './frotas-routing.module';
import { FrotasComponent } from './frotas.component';
import { HttpClientModule } from '@angular/common/http';
import { FrotasCadastroComponent } from './frotas-cadastro/frotas-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FrotasComponent,
    FrotasCadastroComponent
  ],
  imports: [
    CommonModule,
    FrotasRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbButtonsModule,
  ]
})
export class FrotasModule { }
