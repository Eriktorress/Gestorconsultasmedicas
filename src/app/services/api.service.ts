import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
  '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  listado = [];
  item: any;
  private urlApi = 'https://jsonplaceholder.typicode.com/';

  constructor(private HttpClient: HttpClient) { }


  getUsers() {
    let url = this.urlApi + "users";
    this.listado = [];
    return new Promise((resolve, reject) => {
      this.HttpClient.get(url).subscribe((data: []) => {
        resolve(data);
        data.forEach(item => { this.listado.push(item); })
      },
        error => {
          console.log("Error en la comunicación del server");
        });
    });
  }

  async getUser(id: String) {
    let url = this.urlApi + "users/" + id;
    return new Promise((resolve, reject) => {
      this.HttpClient.get(url).subscribe((data: any) => {
        resolve(data);
        this.item = data;
      },
        error => 
      {
        console.log("Error en la comunicación del server");
      });
     });
  }
 }
