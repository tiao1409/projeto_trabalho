import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristasCadastroComponent } from './motoristas-cadastro.component';

describe('MotoristasCadastroComponent', () => {
  let component: MotoristasCadastroComponent;
  let fixture: ComponentFixture<MotoristasCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoristasCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoristasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
