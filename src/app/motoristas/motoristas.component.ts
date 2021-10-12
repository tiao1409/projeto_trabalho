import { Component, OnInit } from '@angular/core';
import { Genero, Motorista } from './motoristas.model';
import { MotoristasService } from './motoristas.service';

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.css']
})
export class MotoristasComponent implements OnInit {

  motoristas: Motorista[] = [];

  constructor(
    private motoristasService: MotoristasService

  ) { }

  ngOnInit(): void {
   this.listar;
  }

 

  excluir (motorista: Motorista){
   const {id , nome} = motorista;
   const resposta = confirm('Deseja realmente excluir o motorista ${id} - ${nome}´?');
   if (resposta) {
     this.motoristasService.remove(id).subscribe(() => this.listar());
   }

  }

  private listar(){
    this.motoristasService
    .findAll()
    .subscribe((motoristas) => {
      this.motoristas = motoristas;
    });

  }

}
