import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  accountid1:number;
  accountid2:number;
  amount:number;
  status:string;
  message:string;
    constructor(private route: ActivatedRoute,private router:Router,
      private wireService: MyserviceService) { }
  
    ngOnInit(): void {
    }
    list(){
      this.wireService.fundtransfer(this.accountid1,this.accountid2,this.amount)
      .subscribe(data => {
        console.log("response recieved");  
        this.message="Transfered successfully";
        },
        error=>{
          this.status="Enter Valid id's";
        });
  }
  
}
