import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Employees } from '../myservice.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddEmployeeComponent implements OnInit {
  message: string;
  
  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addemp:Employees):any{
    console.log(addemp);
     this.myservice.addEmp(addemp).subscribe(data => {
      this.message=data});
  }

}
