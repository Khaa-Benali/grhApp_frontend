import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8090/api'; // Remplacez par l'URL de votre back-end

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const loginRequest = { username, password };
    return this.http.post<any>(`${this.baseUrl}/auth/signin`, loginRequest).pipe(
      tap((response: any) => { // Spécifiez le type de la réponse comme 'any'
        // Stocker le token JWT dans le localStorage
        localStorage.setItem('jwt', response.accessToken);
      })
    );
  }
}

