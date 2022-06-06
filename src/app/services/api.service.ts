import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIService {
  _url = 'http://localhost:3000/archivos'
  constructor(
    public http: HttpClient) {}

    public getArchivos():Observable<any> {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')
    return this.http.get(this._url, { headers: header })
  }
}
