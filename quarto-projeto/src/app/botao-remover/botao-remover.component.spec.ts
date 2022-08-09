import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoRemoverComponent } from './botao-remover.component';

describe('BotaoRemoverComponent', () => {
  let component: BotaoRemoverComponent;
  let fixture: ComponentFixture<BotaoRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoRemoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
