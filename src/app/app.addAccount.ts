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
    id:number;
    status:string;
    constructor(private myservice: MyserviceService,private router: Router) { }
  
    ngOnInit(): void {
    }
    onSubmit(login:Account):any{
      console.log(login);
       this.myservice.addaccount(this.id,login).subscribe(data => {
        this.message=data;
    },
    error=>{
        this.status="Enter proper userid and accountid";

    })
}
}