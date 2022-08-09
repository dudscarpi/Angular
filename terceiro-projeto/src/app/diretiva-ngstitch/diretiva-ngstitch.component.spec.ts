import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgstitchComponent } from './diretiva-ngstitch.component';

describe('DiretivaNgstitchComponent', () => {
  let component: DiretivaNgstitchComponent;
  let fixture: ComponentFixture<DiretivaNgstitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNgstitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaNgstitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
