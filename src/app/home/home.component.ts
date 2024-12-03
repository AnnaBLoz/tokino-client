import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { LectureService } from '../services/lecture.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lectureForm!: FormGroup; // Formulário tipado
  lectures: any[] = []; // Tipado como array
  userName = 'Matheus Lofy'; // Nome do usuário exibido no cabeçalho

  constructor(private lectureService: LectureService, private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.getLectures();
  }

  // Método para inicializar o formulário
  private initForm() {
    this.lectureForm = this.fb.group({
      time: ['', [Validators.required]], // Campo obrigatório
      professor: ['', [Validators.required]], // Campo obrigatório
      room: ['', [Validators.required]], // Campo obrigatório
      id: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.lectureForm.valid) {
      const lectureData = this.lectureForm.value;
      this.lectureService.postLecture(lectureData).subscribe(
        response => {
          console.log('Lecture criada com sucesso!', response);
          this.getLectures(); // Atualizar lista após criar nova palestra
        },
        error => {
          console.error('Erro ao criar a lecture:', error);
        }
      );
    } else {
      console.error('Formulário inválido!');
    }
  }

  getLectures() {
    this.lectureService.getLectures().subscribe(
      (data: any[]) => {
        console.log(this.lectures)
        this.lectures = data;
        console.log('Palestras carregadas:', this.lectures);
      },
      error => {
        console.error('Erro ao carregar as palestras:', error);
      }
    );
  }

  deleteLecture(id: number){
    this.lectureService.deleteLectureById(id).subscribe((data: any[]) => {
      console.log('Aula deletada');
      this.getLectures();
    },
    error => {
      console.error('Erro ao deletar a aula:', error);
    })
    this.getLectures();
  }
}
