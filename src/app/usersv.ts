import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Usersv {
  constructor(private http: HttpClient) { }
  insertuser(data: any) {
    // const headers = new HttpHeaders({'Content-Type': 'application/json' });
    // //token
    return this.http.post('http://localhost:3000/api/user/adduser', data);
  }
  fecthuser(){
    return this.http.get('http://localhost:3000/api/user/fetchuser');
  }
  
  updateuser(data:any)
  {
    // const headers = new HttpHeaders({'Content-Type': 'application/json' });
    // //token
    return this.http.put('http://localhost:3000/api/user/updateuser', data);
  }
  deleteuser(id:any)
  {
    // const headers = new HttpHeaders({'Content-Type': 'application/json' });
    // //token
    return this.http.delete('http://localhost:3000/api/user/deleteuser/'+id);
  }

  loginuser(data:any)
  {
    // const headers = new HttpHeaders({'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/api/user/login', data);
  }
}
