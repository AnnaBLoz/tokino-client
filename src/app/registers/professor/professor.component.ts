import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-professor',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent {
  professorForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private professorService: ProfessorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.professorForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      slug: ['', [Validators.required]],
      lectures: ['', [Validators.required]],
      password: ['', [Validators.required]],
      degreeTitle: ['Mestrado', [Validators.required]],
      curriculum: ['Currículo completo disponível no site.', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.professorForm.invalid) {
      return;
    }

    const formData = this.professorForm.value;

    // Convertendo o campo de texto de 'lectures' para um array de strings
    if (formData.lectures) {
      formData.lectures = formData.lectures.split(',').map((lecture: string) => lecture.trim());
    }

    this.professorService.postProfessor(formData).subscribe({
      next: (professor) => {
        this.router.navigate([`/professor/${professor.slug}`]);
      },
      error: (err) => {
        console.error('Erro ao cadastrar o professor', err);
      }
    });
  }

}
