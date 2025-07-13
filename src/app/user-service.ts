import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //1.HttpClient Class need to be injected in the constructor (DI)
  constructor(private http: HttpClient) { }

  //2.Use this http object to call the API
  fetchUsers()
  {
    return this.http.get('http://localhost:3000/api/user/fetchuser'); 
  }

  insertuser(userData:any)
  {
      const headers= new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post('http://localhost:3000/api/user/adduser',userData,{headers});
  }
  updateuser(userData:any)
  {
    const headers= new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/api/user/updateuser',userData,{headers});
  }

  deactivateuser(userEmail:any)
  {
     const headers= new HttpHeaders({ 'Content-Type': 'application/json' });
     return this.http.post('http://localhost:3000/api/user/deactiveuser',userEmail,{headers});
  }
}
