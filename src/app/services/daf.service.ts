// daf.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CollaborateurDto } from '../models/Collaborateurdto';

@Injectable({
  providedIn: 'root'
})
export class DafService {
  private apiUrl = 'http://localhost:8090/api/daf';

  constructor(private http: HttpClient) {}

  getMasseSalariale(): Observable<number> {
    const token = localStorage.getItem('jwt');

    if (!token) {
      return throwError('No JWT token found');
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get<number>(`${this.apiUrl}/masse-salariale`, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllCollaborateurs(): Observable<CollaborateurDto[]> {
    const token = localStorage.getItem('jwt');

    if (!token) {
      return throwError('No JWT token found');
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get<CollaborateurDto[]>(`${this.apiUrl}/collaborateurs`, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Error:', error);
    return throwError(error);
  }
}
