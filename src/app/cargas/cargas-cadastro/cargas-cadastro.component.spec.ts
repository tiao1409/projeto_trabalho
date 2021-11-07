import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotasCadastroComponent } from './frotas-cadastro.component';

describe('FrotasCadastroComponent', () => {
  let component: FrotasCadastroComponent;
  let fixture: ComponentFixture<FrotasCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrotasCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrotasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
