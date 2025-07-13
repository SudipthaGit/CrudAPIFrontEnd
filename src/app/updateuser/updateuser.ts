import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent } from '@angular/material/dialog';
import { App } from '../app';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  imports: [FormsModule],
  templateUrl: './updateuser.html',
  styleUrl: './updateuser.css'
})
export class Updateuser implements OnInit {
  public userEmail:any;
  public updatedUserName:any;
  constructor(private dialogRef:MatDialogRef<App>,@Inject(MAT_DIALOG_DATA) public data: any)
  {

  }
  ngOnInit(): void {
      //console.log(this.data);
      this.userEmail=this.data.EmailId;
  }
  FnSubmit()
  {
    //console.log(this.updatedUserName);
    const JSONData={
      uName:this.updatedUserName,
      uEmail:this.userEmail
    };
    this.dialogRef.close(JSONData);
  }
  FnReset()
  {
    this.dialogRef.close();
  }
}
