import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bio-show',
  templateUrl: './bio-show.component.html',
  styleUrls: ['./bio-show.component.css']
})
export class BioShowComponent implements OnInit {

  constructor(private router: Router) { }

  bioPopup(){
    this.router.navigate(['/bio-dash/bio-popup'])
  }
  bioAdd(){
    this.router.navigate(['/bio-dash/bio-add'])
  }
  ngOnInit(): void {
  }
  // clickedFunction(){
  //   alert("Request Sent Successfully")
  // }
//   openModal(id: string) {
//     this.modalService.open(id);
// }

// closeModal(id: string) {
//     this.modalService.close(id);
// }


}
