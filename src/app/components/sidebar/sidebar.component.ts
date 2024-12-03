import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isModalOpen = false;
  slug: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/login']);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  redirectToProfessor() {
    if (this.slug) {
      this.router.navigate([`/professor/${this.slug}`]);
      this.closeModal(); // Fecha o modal após redirecionar
    }
  }
}
