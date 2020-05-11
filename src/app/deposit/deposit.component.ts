import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService, Account } from '../myservice.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class AddingComponent implements OnInit {
  accountid;
  amount:number;
  message:String;
  status:string;
    constructor(private route: ActivatedRoute,private router:Router,
      private Service: MyserviceService) { }
  
    ngOnInit(): void {
      this.accountid=this.Service.sharedId;
    }
    list(){
 
    this.Service.addbalance(this.accountid,this.amount).subscribe(
      data=>{
        this.message=data;
      },
      error=>{
        this.status="Account Id does not exist";
      }
    )
  }
}