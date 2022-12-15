import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Itens } from '../model/item.model';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  //Atributo que recebe o endereço da API
  readonly API = 'http://localhost:3000/itens/';

  //Vou contratar um tradutor - httpOptions
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  //Metodo que captura todas os itens
  getFoto(){
     return this.http.get<Itens[]>(this.API);
  }

  //Método que captura um único item
  getFotoOne(id: number){
    return this.http.get<Itens[]>(this.API + id);
 }

  //Método de cadastro da foto
  postFoto(dados: any){
   return this.http.post(this.API, JSON.stringify(dados), this.httpOptions).subscribe();
  }

  //Exclusão da foto
  delFoto(id:number){
    return this.http.delete(this.API + id).subscribe();
  }

  updateFoto(dados: any, id: any ){
    console.log(dados)
    return this.http.put(this.API + id, JSON.stringify(dados), this.httpOptions).subscribe();
  }
}
