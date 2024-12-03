import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfessorComponent } from './registers/professor/professor.component';
import { StudentComponent } from './registers/student/student.component';
import { ProfessorPerfilComponent } from './professor-perfil/professor-perfil.component';
import { LecturesComponent } from './registers/lectures/lectures.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registers/professor', component: ProfessorComponent },
  { path: 'registers/student', component: StudentComponent },
  { path: 'registers/lecture', component: LecturesComponent },
  { path: 'professor/:slug', component: ProfessorPerfilComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];
