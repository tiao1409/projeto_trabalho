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

  findAll() {
   return this.httpClient.get <Motorista[]>(this.API);
    
  }

  remove(id: number) {
    return this.httpClient.delete<void>(`${this.API}/${id}`)
  }
  save( motorista: Motorista){
    return this.httpClient.post<void>(this.API, motorista)

  }
}
