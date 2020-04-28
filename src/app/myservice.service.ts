import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  updateemployee: Employees;
  constructor(private httpService: HttpClient) { }
  public getEmployees() {
    console.log("ins service get employees");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Employees>("http://localhost:9994/user/GetAllUsers");
  }

  public addEmp(addemp: Employees) {
    console.log("ins service add");
    console.log(addemp);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:9994/user/addUser", addemp,  { headers, responseType: 'text'});
  }
  
  public addaccount(id:number,addemp1: Account) {
    console.log("ins service add");
    console.log(addemp1);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:9994/account/addAccount/"+id, addemp1,  { headers, responseType: 'text'});
  }
  public update(updateemployee: Employees) {
    this.updateemployee = updateemployee;
  }
  public updateMethod() {
    return this.updateemployee;
  }
  public onUpdate(updatemp: Employees) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:9994/user/UpdateUser", updatemp,  { headers, responseType: 'text'});
  }
  public delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:9994/user/DeleteUser/" + id,  { headers, responseType: 'text'});
  }

  public deleteaccount(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:9994/account/DeleteAccount/" + id,  { headers, responseType: 'text'});
  }

  userlogin(login:Employees){
    console.log("ins service login");
    console.log(login);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:9994/user/Loginuser", login,  { headers, responseType: 'text'});
  }

  getBalance(id: number): Observable<any>{
    return this.httpService.get('http://localhost:9994/account/GetBalance/'+id);
  
  }
 
fundtransfer(accountid1:number,accountid2:number,amount:number):Observable<string> {
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.put('http://localhost:9994/account/fundtransfer/'+accountid1+'/'+accountid2+'/'+ amount,this.updateemployee,{headers,responseType:'text'});
}

addbalance(acc:Account,amount1:number): Observable<String>{
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.put('http://localhost:9994/account/Deposit/'+amount1,acc,{ headers, responseType: 'text'});
  
  
  }
  }
export class Employees {
  userId: number;
  userName: string;
  userPhoneno: number;
  userPassword: string;
  userEmail:string;
}
export class Account{
    
  accountid:number;
  status:string;
  accountbalance:number;
  }