import { Injectable } from '@angular/core';
import {  Carga } from './cargas.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargasService {
 
  private readonly API = 'http://localhost:8081/transportadora/resources/cargas';
  constructor(
    private httpClient: HttpClient,
  ) { }

  findById(id: number) {
    return this.httpClient.get<Carga>(`${this.API}/${id}`)
  }

  findAll() {
    return this.httpClient.get<Carga[]>(this.API);
  }

  remove(id: number) {
    return this.httpClient.delete<void>(`${this.API}/${id}`)
  }

  add(carga: Carga) {
    return this.httpClient.post<void>(this.API, carga);
  }

  update(id: number, carga: Carga) {
    return this.httpClient.put<Carga>(`${this.API}/${id}`, carga)
  }
}
