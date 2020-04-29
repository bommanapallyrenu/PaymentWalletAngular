import { Component, OnInit } from '@angular/core';
import { MyserviceService, Transaction, Users} from '../myservice.service';
import { Employee } from '../employee-service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
 

  accountid: number;
  transactions: Transaction[];
 message:string;
  constructor(private dataService: MyserviceService) { }
 
  ngOnInit() {
    this.accountid = 0;
  }
 
  private getTransactions() {
    this.dataService.getTransactionsById(this.accountid)
      .subscribe(transactions => {this.transactions = transactions},
        error=>{this.message="Account does not exists"}
      );
  }
 
  onSubmit() {
    this.getTransactions();
  }

}
