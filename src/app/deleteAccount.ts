import {Account} from './Account';
import { Component } from "@angular/core";
import { MyserviceService, Users} from './myservice.service';
import { Router } from '@angular/router';


@Component({
    selector:'delete',
    templateUrl:'deleteAccount.html'
})

export class DeleteAccountComponent {
message:string;
msg:string;
  userid:any;
    constructor(private service:MyserviceService,private router:Router){}

    ngOnInit(): void {
      this.userid=this.service.sharedId; 
    this.service.delete(this.userid).subscribe(data=>{
      this.message=data;
      this.router.navigate(['addemp']);
    },
    error=>{
      console.log("exception occured");
      this.msg="Id does not exist";
    })
    }
}
