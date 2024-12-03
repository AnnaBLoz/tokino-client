import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LectureService } from '../../services/lecture.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lectures',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './lectures.component.html',
  styleUrl: './lectures.component.css'
})
export class LecturesComponent {
  lectureForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private lectureService: LectureService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.lectureForm = this.fb.group({
      lectureName: ['', [Validators.required]],
      owner: ['', [Validators.required]],
      students: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.lectureForm.invalid) {
      return;
    }

    const formData = this.lectureForm.value;

    if (formData.students) {
      formData.students = formData.students.split(',').map((students: string) => students.trim());
    }

    this.lectureService.postLecture(formData).subscribe({
      next: () => {
        this.router.navigate([`/home`]);
      },
      error: (err) => {
        console.error('Erro ao cadastrar matéria', err);
      }
    });
  }
}
