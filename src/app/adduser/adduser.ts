import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AlertComponent } from "../alert.component";
import { Component } from "@angular/core";
import { Usersv } from "../usersv";

@Component({
  selector: 'app-adduser',
  imports: [FormsModule, CommonModule, AlertComponent],
  templateUrl: './adduser.html',
  styleUrl: './adduser.css'
})
export class Adduser {
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

