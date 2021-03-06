import { Component, OnInit } from "@angular/core";
import { Account } from "./Account";
import { MyserviceService } from './myservice.service';
import { Router } from '@angular/router';
@Component({
    selector:'add-addAccount',
    templateUrl:'addaccount.html'
})


export class AddAccountComponent implements OnInit{
    
    message: string;
    id:any;
    status:string;
    constructor(private myservice: MyserviceService,private router: Router) { }
  
    ngOnInit(): void {
        this.id=this.myservice.sharedId;
    }
    onSubmit(login:Account):any{
      console.log(login);
       this.myservice.addaccount(this.id,login).subscribe(
           data => {
        this.message=data;
        this.myservice.sharedId=this.id;
    },
    error=>{
        this.status="Enter valid userid and accountid";

    })
}
}