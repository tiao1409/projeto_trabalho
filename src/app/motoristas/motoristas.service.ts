import { Injectable } from '@angular/core';
import { Genero, Motorista } from './motoristas.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {
 
  private readonly API = 'http://localhost:8081/transportadora/resources/motorista';
  constructor(
    private httpClient: HttpClient,
  ) { }

  findById(id: number) {
    return this.httpClient.get<Motorista>(`${this.API}/${id}`)
  }

  findAll() {
    return this.httpClient.get<Motorista[]>(this.API);
  }

  remove(id: number) {
    return this.httpClient.delete<void>(`${this.API}/${id}`)
  }

  add(motorista: Motorista) {
    return this.httpClient.post<void>(this.API, motorista);
  }

  update(id: number, motorista: Motorista) {
    return this.httpClient.put<Motorista>(`${this.API}/${id}`, motorista)
  }
}
