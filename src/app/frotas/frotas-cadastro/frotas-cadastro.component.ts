import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { Genero } from '../frotas.model';
import { FrotasService } from '../frotas.service';

@Component({
  selector: 'app-frotas-cadastro',
  templateUrl: './frotas-cadastro.component.html',
  styleUrls: ['./frotas-cadastro.component.css']
})
export class FrotasCadastroComponent implements OnInit {

  frotasForm: FormGroup;
  frotaId: number;

  constructor(
    private formBuilder: FormBuilder,
    private frotasService: FrotasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.frotaId = 0;
    this.frotasForm = this.formBuilder.group({
      modelo: ['', [Validators.required, Validators.minLength(3)]],
      estado: [''],
      municipio: ['', Validators.required],
      placa: ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.frotaId = parseInt(id);
      this.frotasService
        .findById(this.frotaId)
        .subscribe((frota) => {
          this.frotasForm.patchValue({
            modelo: frota.modelo,
            municpio: frota.municipio,
            tipo: frota.tipo,
            placa: frota.placa,
            estado: frota.estado
          });
        });
    }
  }

  salvar() {
    if (this.frotaId) {
      this.frotasService
        .update(this.frotaId, this.frotasForm.value)
        .subscribe(
          () => {
            alert('Frota atualizado com sucesso');
            this.router.navigate(['']);
          },
          () => alert('Erro ao atualizar o Frota')
        );
    } else {
      this.frotasService.add(this.frotasForm.value).subscribe(
        () => {
          alert('Caminhão salvo com sucesso!');
          this.router.navigate(['']);
        },
        () => alert('Erro ao salvar o caminhão')
      );
    }
  }
}

