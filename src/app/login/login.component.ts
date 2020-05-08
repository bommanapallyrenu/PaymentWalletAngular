import { Component, OnInit } from '@angular/core';
import { MyserviceService, Users} from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string;
  
  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(login:Users):any{
    console.log(login);
     this.myservice.userlogin(login).subscribe(data => {
      console.log("response recieved");
      this.myservice.sharedId=login.userId;
      this.router.navigate(['loginsuccess'])
  },
  error=>{
    console.log("exception occured");
    this.msg="Bad credentials . please enter valid id and password";
  })
}

}
