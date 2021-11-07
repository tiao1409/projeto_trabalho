import { Component, OnInit } from '@angular/core';
import { Frota } from './frotas.model';
import { FrotasService } from './frotas.service';

@Component({
  selector: 'app-frotas',
  templateUrl: './frotas.component.html',
  styleUrls: ['./frotas.component.css']
})
export class FrotasComponent implements OnInit {

  frotas: Frota[] = [];

  constructor(private frotasService: FrotasService) {

  }
  ngOnInit(): void {
    this.listar();
  }



  excluir(frota: Frota) {
    const { id, modelo } = frota;
    const resposta = confirm(`Deseja excluir mesmo ${id} - ${modelo}'?`);
    if (resposta) {
      this.frotasService.remove(id).subscribe(() => this.listar());
    }

  }

  private listar() {
    this.frotasService.findAll().subscribe((frotas) => {
      this.frotas = frotas;
    })

  }

}
