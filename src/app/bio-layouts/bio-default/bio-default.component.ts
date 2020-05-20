import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio-default',
  templateUrl: './bio-default.component.html',
  styleUrls: ['./bio-default.component.css']
})
export class BioDefaultComponent implements OnInit {
  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
