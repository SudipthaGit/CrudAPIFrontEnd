import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usersv } from './usersv';
import { AlertComponent } from './alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, AlertComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TDF';
  public user={
    name:'',
    email:'',
    password:'',
    role:''
  };
  public alertMessage: string = '';
  constructor(private apicall:Usersv){}
  onFormSubmit(formelement:any)
  {
    this.apicall.insertuser(this.user)
    .subscribe((res:any)=>{
      if(res.isSuccess)
      {
        this.alertMessage = "User added successfully";
      }
    });
  }
  resetForm(formelement:any)
  {
    formelement.resetForm();
  }
}
