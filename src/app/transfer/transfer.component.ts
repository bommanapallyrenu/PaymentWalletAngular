import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  accountid1:any;
  accountid2:number;
  amount:number;
  status:string;
  message:string;
    constructor(private route: ActivatedRoute,private router:Router,
      private Service: MyserviceService) { }
  
    ngOnInit(): void {
      this.accountid1=this.Service.sharedId;
    }
    list(){
      this.Service.fundtransfer(this.accountid1,this.accountid2,this.amount)
      .subscribe(data => {
        console.log("response recieved");  
        this.message="Transfered successfully";
        },
        error=>{
          this.status="Cannot transfer money,please check your id and balance before transfering";
        });
  }
  
}
