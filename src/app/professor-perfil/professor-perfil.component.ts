import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-professor-perfil',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './professor-perfil.component.html',
  styleUrls: ['./professor-perfil.component.css']
})
export class ProfessorPerfilComponent implements OnInit {
  slug!: string;
  formData: any = {};  // Variável para armazenar os dados do professor

  constructor(
    private route: ActivatedRoute,
    private professorService: ProfessorService
  ) {}

  ngOnInit(): void {
    // Pega o 'slug' da URL
    this.slug = this.route.snapshot.paramMap.get('slug')!;

    // Chama o serviço para buscar o professor com o slug
    this.getProfessorBySlug(this.slug);
  }

  // Método para buscar o professor pelo 'slug'
  getProfessorBySlug(slug: string): void {
    this.professorService.getProfessorBySlug(slug).subscribe({
      next: (professor) => {
        this.formData = professor;  // Armazena os dados do professor
      },
      error: (err) => {
        console.error('Erro ao buscar o professor', err);
      }
    });
  }
}
