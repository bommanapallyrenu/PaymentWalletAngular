import { Component, OnInit } from '@angular/core';
import { MyserviceService, Transaction, Users} from '../myservice.service';
import { Employee } from '../employee-service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
 

  accountid: any;
  transactions: Transaction[];
 message:string;
  constructor(private dataService: MyserviceService) { }
 
  ngOnInit() {
    this.accountid=this.dataService.sharedId;

    this.dataService.getTransactionsById(this.accountid)
      .subscribe(transactions => {this.transactions = transactions}
      );
  }
}
