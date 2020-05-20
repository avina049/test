import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bio-popup',
  templateUrl: './bio-popup.component.html',
  styleUrls: ['./bio-popup.component.css']
})
export class BioPopupComponent implements OnInit {


  constructor(private router: Router) { }
  bioShow(){
    this.router.navigate(['/bio-dash/bio-show'])
  }  
  bioAdd(){
    this.router.navigate(['/bio-dash/bio-view'])
  }
  ngOnInit(): void {
  }

}
