import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Users } from '../myservice.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  message: string;
  
  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(adduser:Users):any{
    console.log(adduser);
     this.myservice.addUser(adduser).subscribe(data => {
      this.message=data});
  }

}
