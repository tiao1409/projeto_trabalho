import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { Genero } from '../frotas.model';
import { CargasService } from '../cargas.service';

@Component({
  selector: 'app-cargas-cadastro',
  templateUrl: './cargas-cadastro.component.html',
  styleUrls: ['./cargas-cadastro.component.css']
})
export class CargasCadastroComponent implements OnInit {

  cargasForm: FormGroup;
  cargaId: number;

  constructor(
    private formBuilder: FormBuilder,
    private cargasService: CargasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.cargaId = 0;
    this.cargasForm = this.formBuilder.group({
      nf: ['', [Validators.required, Validators.minLength(3)]],
      estado: [''],
      municipio: ['', Validators.required],
      peso: ['', Validators.required],
      tipo: ['', Validators.required],
      frete: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.cargaId = parseInt(id);
      this.cargasService
        .findById(this.cargaId)
        .subscribe((carga) => {
          this.cargasForm.patchValue({
            nf: carga.nf,
            municpio: carga.municipio,
            tipo: carga.tipo,
            peso: carga.peso,
            estado: carga.estado,
            frete: carga.frete,
          });
        });
    }
  }

  salvar() {
    if (this.cargaId) {
      this.cargasService
        .update(this.cargaId, this.cargasForm.value)
        .subscribe(
          () => {
            alert('Carga atualizado com sucesso');
            this.router.navigate(['']);
          },
          () => alert('Erro ao atualizar o Carga')
        );
    } else {
      this.cargasService.add(this.cargasForm.value).subscribe(
        () => {
          alert('Caminhão salvo com sucesso!');
          this.router.navigate(['']);
        },
        () => alert('Erro ao salvar o caminhão')
      );
    }
  }
}

