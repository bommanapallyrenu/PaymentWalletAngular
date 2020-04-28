import { Component, OnInit } from '@angular/core';
import { MyserviceService, Employees } from '../myservice.service';
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
  onSubmit(login:Employees):any{
    console.log(login);
     this.myservice.userlogin(login).subscribe(data => {
      console.log("response recieved");
      this.router.navigate(['loginsuccess'])
  },
  error=>{
    console.log("exception occured");
    this.msg="Bad credentials . please enter valid id and password";
  })
}

}
