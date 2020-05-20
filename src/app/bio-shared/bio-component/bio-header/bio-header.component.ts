import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-bio-header',
  templateUrl: './bio-header.component.html',
  styleUrls: ['./bio-header.component.css']
})
export class BioHeaderComponent implements OnInit {
  
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  toogleSideBar(){
    this.toggleSideBarForMe.emit();
  }


}
