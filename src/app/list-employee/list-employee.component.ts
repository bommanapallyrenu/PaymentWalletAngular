import { Component, OnInit } from '@angular/core';
import { MyserviceService, Employees } from '../myservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  message: string;
  employees: Employees[];
  constructor(private myservice: MyserviceService, private router: Router) {
  }

  ngOnInit(): any {
    this.myservice.getEmployees().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.employees = response;
  }
  update(updateemployee: Employees) {
    this.myservice.update(updateemployee);
    this.router.navigate(['/updateemp']); //updating the employee
  }
  delete(deleteemployee: Employees): any {
    this.myservice.delete(deleteemployee.userId).subscribe(data => {
      this.message = data
    });
    this.router.navigate(['/listemp']);
  }
}
