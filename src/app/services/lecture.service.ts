import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LectureService {

  private baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getLectureById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/lecture/${id}`);
  }

  getLectures(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/lecture/all`);
  }

  putLectureById(id: number, lectureData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/lecture/${id}`, lectureData);
  }

  postLecture(lectureData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/lecture`, lectureData);
  }

  deleteLectureById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/lecture/${id}`);
  }
}
