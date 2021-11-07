import { Injectable } from '@angular/core';
import {  Frota } from './frotas.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrotasService {
 
  private readonly API = 'http://localhost:8081/transportadora/resources/frotas';
  constructor(
    private httpClient: HttpClient,
  ) { }

  findById(id: number) {
    return this.httpClient.get<Frota>(`${this.API}/${id}`)
  }

  findAll() {
    return this.httpClient.get<Frota[]>(this.API);
  }

  remove(id: number) {
    return this.httpClient.delete<void>(`${this.API}/${id}`)
  }

  add(frota: Frota) {
    return this.httpClient.post<void>(this.API, frota);
  }

  update(id: number, frota: Frota) {
    return this.httpClient.put<Frota>(`${this.API}/${id}`, frota)
  }
}
