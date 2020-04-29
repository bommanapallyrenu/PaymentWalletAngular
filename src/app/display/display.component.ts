import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
id: number;
amount:number = 0;
  constructor(private route: ActivatedRoute,private router:Router,
    private wireService: MyserviceService) { }

  ngOnInit(): void {
  }
message:string;
  list(){
    this.wireService.getBalance(this.id)
      .subscribe(data => {
        this.amount = data;
      }, 
      error => {
        this.message="Account Id does not Exist";
      })
  }

}
