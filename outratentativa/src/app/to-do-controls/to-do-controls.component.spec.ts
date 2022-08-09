import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoControlsComponent } from './to-do-controls.component';

describe('ToDoControlsComponent', () => {
  let component: ToDoControlsComponent;
  let fixture: ComponentFixture<ToDoControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
