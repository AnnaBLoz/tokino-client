import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  formData = {
    name: '',
    email: '',
    matricula: '',
    curso: ''
  };

  cursos = ['Engenharia', 'Medicina', 'Direito', 'Arquitetura'];

  onSubmit() {
    console.log('Formulário enviado:', this.formData);
    alert('Cadastro realizado com sucesso!');
  }
}
