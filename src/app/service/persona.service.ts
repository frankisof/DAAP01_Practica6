import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiUrl = 'http://localhost:8085/DAAP01Practica05-0.0.1-SNAPSHOT/api/v1/empleado'; // URL de la nueva API

  constructor(private http: HttpClient) {}

  // Obtener todas las personas
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiUrl}/`);
  }

  // Obtener una persona por ID
  getPersona(id: string): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/${id}`);
  }

  // Agregar una nueva persona
  addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.apiUrl}`, persona);
  }

  // Actualizar una persona existente
  updatePersona(id: string, persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiUrl}/${id}`, persona);
  }

  // Eliminar una persona por ID
  deletePersona(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
