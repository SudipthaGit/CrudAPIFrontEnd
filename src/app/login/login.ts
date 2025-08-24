import { Component } from '@angular/core';
import { Usersv } from '../usersv';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../alert.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, AlertComponent],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  public user={
      email:'',
      password:'',
      
    };
    public alertMessage: string = '';
    constructor(private apicall:Usersv,private route:Router){}
    onFormSubmit(formelement:any)
    {
      this.apicall.loginuser(this.user)
      .subscribe((res:any)=>{
        console.log(res);
        if(res.isSuccess)
        {
          // this.alertMessage = "login successful";
          localStorage.setItem('token',res.token);
          this.route.navigateByUrl('index');
        }
      });
    }
    resetForm(formelement:any)
    {
      formelement.resetForm();
    }
}
