import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pickUpDetails(){
    this.router.navigate(['/Plastic-Dash/pickUp'])
  }
}
