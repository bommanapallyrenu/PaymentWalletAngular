import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  constructor(private myservice: MyserviceService,private router: Router) { }


  ngOnInit(): void {
    
  }
  logout(){


    sessionStorage.clear();
    
      this.router.navigate(['applogin']);
    
    }

}
