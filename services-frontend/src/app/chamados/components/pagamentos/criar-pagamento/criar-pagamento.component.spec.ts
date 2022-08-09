import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPagamentoComponent } from './criar-pagamento.component';

describe('CriarPagamentoComponent', () => {
  let component: CriarPagamentoComponent;
  let fixture: ComponentFixture<CriarPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPagamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
