import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService, Users } from '../myservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
id: number;
amount:number = 0;
userid:any;
user:Users;
name:string;
  constructor(private route: ActivatedRoute,private router:Router,
    private Service: MyserviceService) { }

  ngOnInit(): void {
    this.userid=this.Service.sharedId;

    
      this.Service.getBalance(this.userid)
        .subscribe(data => {
          this.amount = data;
          }, 
        error => {
          this.message="Account Id does not Exist";
        })
        this.Service.getuserbyid(this.userid)
        .subscribe(user => {
          this.user = user;
          this.name=this.user.userName;    
        }
        );
      }

  
message:string;
  

}
