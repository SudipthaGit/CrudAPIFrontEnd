import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from './user-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularPaginatorModule } from 'angular-paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialog } from '@angular/material/dialog';
import { Updateuser } from './updateuser/updateuser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'FecthApi';
  public userList: any = [];
  public uname: any;
  public uemail: any;
  public upass: any;
  public urole: any;
  currentPage: number = 1;
  public DataFromUpdateusrComp: any;
  //3. UserService is injected in the constructor (Dependency Injection)
  constructor(private APICALL: UserService, private cdr: ChangeDetectorRef, private dialog: MatDialog) { }

  //4. ngOnInit is a lifecycle hook that is called after the component is initialized
  ngOnInit() {
    this.APICALL.fetchUsers().subscribe((res: any) => {
      this.userList = res.data;
      this.cdr.detectChanges();//zoneless change detection (angular 20)
    });
  }

  FnInsertUser() {
    console.log(this.uname + " " + this.uemail + " " + this.upass + " " + this.urole);
    const JSONData = {
      name: this.uname,
      email: this.uemail,
      password: this.upass,
      role: this.urole
    };
    this.APICALL.insertuser(JSONData).subscribe((res: any) => {
      if (res.isSuccess) {
        alert("User inserted");
        this.ngOnInit();
      }
      else {
        alert("Error");
      }
    });
  }
  FnDeactivateUser(emailid: any) {
    console.log(emailid);
    const JSONData = {
      'email': emailid
    };
    this.APICALL.deactivateuser(JSONData).subscribe((res: any) => {
      if (res.isSuccess) {
        alert("user deactivated");
        this.ngOnInit();
      }
      else {
        alert("user deactivated");
      }
    });
  }

  FnUpdateUser(emailid: any) {
    debugger;
    const dialogBoxFn = this.dialog.open(Updateuser,
      {
        data: { 'EmailId': emailid }
      }
    );

    dialogBoxFn.afterClosed().subscribe((res: any) => {
      console.log(res);
      if (res != undefined) {
        this.DataFromUpdateusrComp = res;
        const APICallJSONData = {
          email: this.DataFromUpdateusrComp.uEmail,
          name: this.DataFromUpdateusrComp.uName
        };
        this.APICALL.updateuser(APICallJSONData).subscribe((res: any) => {
          if (res.isSuccess) {
            alert("User Updated Successfully");
            this.ngOnInit();
          }
          else {
            alert("error");
          }
        });
      }

    });
  }

}
