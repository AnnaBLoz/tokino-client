import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getStudentBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/student/${slug}`);
  }

  postStudent(studentData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/student`, studentData);
  }
}
