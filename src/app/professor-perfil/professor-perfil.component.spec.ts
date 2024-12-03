import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorPerfilComponent } from './professor-perfil.component';

describe('ProfessorPerfilComponent', () => {
  let component: ProfessorPerfilComponent;
  let fixture: ComponentFixture<ProfessorPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessorPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
