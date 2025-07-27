import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Usersv {
  constructor(private http: HttpClient) { }

  insertuser(data: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/api/user/adduser', data, { headers });
  }
}
