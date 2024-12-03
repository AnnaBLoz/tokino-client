import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentForm!: FormGroup;

  cursos = ['Engenharia de Software', 'Medicina', 'Direito', 'Arquitetura'];

  constructor(
    private studentService: StudentService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      slug: ['', [Validators.required]], // Substituindo matrícula por slug
      password: ['', [Validators.required]],
      course: ['', [Validators.required]], // Campo obrigatório para o curso
    });
  }

  onSubmit() {
    if (this.studentForm.invalid) {
      return;
    }

    const formData = this.studentForm.value;

    this.studentService.postStudent(formData).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro ao cadastrar o aluno', err);
      }
    });
  }
}
