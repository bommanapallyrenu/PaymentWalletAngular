import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee{

  id:number;
  ename:string;
  esal:number;
 

 constructor(id:number, ename:string, esal:number){
          this.id = id;
          this.ename = ename;
          this.esal = esal;
      }
}

@Injectable({ 
  providedIn: 'root'
})


export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  employee:Employee;

  

public create(employee){
    console.log(employee);
    return this.http.post("http://localhost:9994/account/addAccount",employee,{responseType: 'text'});
  }

 public getallEmployees(){
    return this.http.get("http://localhost:4569/bank/ListAllEmployees",{responseType: 'json'});
  }

public getEmployeeDetails(id:number){
    
    return this.http.get("http://localhost:4569/bank/findById/"+id,{responseType: 'json'});
  }

 public deleteEmployee(id:number){
    return this.http.delete("http://localhost:9994/account/DeleteAccount/"+id,{responseType:'json'});
  }

public updateEmployeeDetails(employee:any){
    return this.http.put("http://localhost:4569/bank/updateEmpoyee",employee,{responseType:'text'});
  }
}


