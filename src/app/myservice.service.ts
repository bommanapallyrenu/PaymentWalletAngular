import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { logging } from 'protractor';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  updateuser: Users;
employee:Transaction;

  constructor(private httpService: HttpClient) { }
  public getUsers() {
    console.log("ins service get employees");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Users>("http://localhost:9994/user/GetAllUsers");
  }

  public addUser(adduser: Users) {
    console.log("ins service add");
    console.log(adduser);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:9994/user/addUser", adduser,  { headers, responseType: 'text'});
  }
  
  public addaccount(id:number,addaccount1: Account) {
    console.log("ins service add");
    console.log(addaccount1);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:9994/account/addAccount/"+id, addaccount1,  { headers, responseType: 'text'});
  }
  public update(updateuser:Users) {
    this.updateuser = updateuser;
  }
  public updateMethod() {
    return this.updateuser;
  }
  public onUpdate(updateuser: Users) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:9994/user/UpdateUser", updateuser,  { headers, responseType: 'text'});
  }
  public delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:9994/user/DeleteUser/" + id,  { headers, responseType: 'text'});
  }

  userlogin(login:Users){
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
  return this.httpService.put('http://localhost:9994/account/fundtransfer/'+accountid1+'/'+accountid2+'/'+ amount,this.updateuser,{headers,responseType:'text'});
}

addbalance(acc:Account,amount1:number): Observable<String>{
  const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
  return this.httpService.put('http://localhost:9994/account/Deposit/'+amount1,acc,{ headers, responseType: 'text'});
  }
  getTransactionsById(accountid: number): Observable<any> {
    return this.httpService.get('http://localhost:9994/transaction/GetAllTransactionsById/'+accountid);
  }
}
export class Users {
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
  export class Transaction{
    transactionID:number;
    amount:number;
	  description:string
    accountbalance:number;
    accountid:number;
    transactionDate:Date;
  }