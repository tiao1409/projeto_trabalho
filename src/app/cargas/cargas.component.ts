import { Component, OnInit } from '@angular/core';
import { Carga } from './cargas.model';
import { CargasService } from './cargas.service';

@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.component.html',
  styleUrls: ['./cargas.component.css']
})
export class CargasComponent implements OnInit {

  cargas: Carga[] = [];

  constructor(private cargasService: CargasService) {

  }
  ngOnInit(): void {
    this.listar();
  }



  excluir(carga: Carga) {
    const { id, nf } = carga;
    const resposta = confirm(`Deseja excluir mesmo ${id} - ${nf}'?`);
    if (resposta) {
      this.cargasService.remove(id).subscribe(() => this.listar());
    }

  }

  private listar() {
    this.cargasService.findAll().subscribe((cargas) => {
      this.cargas = cargas;
    })

  }

}
