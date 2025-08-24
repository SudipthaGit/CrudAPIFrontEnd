import { Component, NgModule, OnInit } from '@angular/core';
import { Usersv } from '../usersv';
import { authguardGuard } from '../authguard-guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fecthuser',
  imports: [],
  templateUrl: './fecthuser.html',
  styleUrl: './fecthuser.css'
})
export class Fecthuser implements OnInit {
  public userData:any=[];
  constructor(private usv:Usersv,private route:Router){

  }
  ngOnInit(): void {
    this.usv.fecthuser().subscribe((res:any)=>{
      console.log(res);
      this.userData=res.data;
    })
  }

  logout()
  {
    localStorage.clear();
    this.route.navigate(['login']);
  }
}
