import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-professor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './professor.component.html',
  styleUrl: './professor.component.css'
})
export class ProfessorComponent {
  formData = {
    name: '',
    email: '',
    slug: '',
  };

  onSubmit() {
    console.log('Formulário enviado:', this.formData);
    alert('Cadastro realizado com sucesso!');
  }
}
