import { Component, OnInit } from '@angular/core';

// import { Popup } from 'ng2-opd-popup';
import { Router } from '@angular/router';
import { Raiserequest } from 'src/app/raiserequest';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  states: Array<String> = ['Odisha', 'Karnataka'];
  raiserequest: Raiserequest = new Raiserequest();
  addUserFormError = false;
  submitted = false;

  constructor(private router: Router) { }

  // ClickButton(){
  //   this.popup.show();
  // }

  ngOnInit(): void {
  }
  pickUpShow(){
    this.router.navigate(['/Plastic-Dash/pickUp'])
  }

  viewDetails(){
    this.router.navigate(['/Plastic-Dash/viewDetails'])
  }
}
