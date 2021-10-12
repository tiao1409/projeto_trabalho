import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Genero } from '../motoristas.model';
import { MotoristasService } from '../motoristas.service';

@Component({
  selector: 'app-motoristas-cadastro',
  templateUrl: './motoristas-cadastro.component.html',
  styleUrls: ['./motoristas-cadastro.component.css']
})
export class MotoristasCadastroComponent implements OnInit {

  motoristasForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private motoristasService: MotoristasService,
  ) { 
    this.motoristasForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      nacionalidade: [''],
      genero: [Genero.FEMININO, Validators.required]
    });
  }

  ngOnInit(): void { }
    salvar(){
      console.log(this.motoristasForm.value);

      this.motoristasService.save(this.motoristasForm.value).subscribe(
        () => {
          alert("Motorista Cadastrado")
        },
        () => {
          alert("Motorista não Cadstrado")
        }
      );
    }
  }


