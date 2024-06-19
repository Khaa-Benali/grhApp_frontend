import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 
import { catchError } from 'rxjs/operators';
import { Collaborateur } from '../models/Collaborateur';

@Injectable({
  providedIn: 'root'
})
export class RhService {
  private apiUrl = 'http://localhost:8090/api/rh'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  ajouterCollaborateur(collaborateur: Collaborateur): Observable<Collaborateur> {
    const token = localStorage.getItem('jwt'); // Retrieve the token from localStorage

    if (!token) {
      return throwError('No JWT token found');
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post<Collaborateur>(`${this.apiUrl}/ajouterCollab`, collaborateur, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error.message || error);
}
}
