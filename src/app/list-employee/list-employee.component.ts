import { Component, OnInit } from '@angular/core';
import { MyserviceService, Users } from '../myservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  message: string;
  users: Users[];
  constructor(private myservice: MyserviceService, private router: Router) {
  }

  ngOnInit(): any {
    this.myservice.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.users= response;
  }
  update(updateuser: Users) {
    this.myservice.update(updateuser);
    this.router.navigate(['/updateemp']); //updating the employee
  }
  delete(deleteuser: Users): any {
    this.myservice.delete(deleteuser.userId).subscribe(data => {
      this.message = data
    });
    this.router.navigate(['/listemp']);
  }
}
