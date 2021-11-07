import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from '../motoristas.model';
import { MotoristasService } from '../motoristas.service';

@Component({
  selector: 'app-motoristas-cadastro',
  templateUrl: './motoristas-cadastro.component.html',
  styleUrls: ['./motoristas-cadastro.component.css']
})
export class MotoristasCadastroComponent implements OnInit {

  motoristasForm: FormGroup;
  motoristaId: number;

  constructor(
    private formBuilder: FormBuilder,
    private motoristasService: MotoristasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.motoristaId = 0;
    this.motoristasForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      nacionalidade: [''],
      genero: ['', Validators.required],
      cpf: ['', Validators.required],
      cidade: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.motoristaId = parseInt(id);
      this.motoristasService
        .findById(this.motoristaId)
        .subscribe((motorista) => {
          this.motoristasForm.patchValue({
            nome: motorista.nome,
            nacionalidade: motorista.nacionalidade,
            genero: motorista.genero,
            cpf: motorista.cpf,
            cidade: motorista.cidade
          });
        });
    }
  }

  salvar() {
    if (this.motoristaId) {
      this.motoristasService
        .update(this.motoristaId, this.motoristasForm.value)
        .subscribe(
          () => {
            alert('Motorista atualizado com sucesso');
            this.router.navigate(['']);
          },
          () => alert('Erro ao atualizar o motorista')
        );
    } else {
      this.motoristasService.add(this.motoristasForm.value).subscribe(
        () => {
          alert('Motorista salvo com sucesso!');
          this.router.navigate(['']);
        },
        () => alert('Erro ao salvar o motorista')
      );
    }
  }
}

