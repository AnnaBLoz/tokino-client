import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getProfessorBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/professor/${slug}`);
  }

  getProfessor(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/professor`);
  }

  putProfessorBySlug(slug: string, professorData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/professor/${slug}`, professorData);
  }

  postProfessor(professorData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/professor`, professorData);
  }
}
