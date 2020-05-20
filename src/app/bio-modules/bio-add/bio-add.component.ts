import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bio } from 'src/app/bio';
import { BioService } from 'src/app/bio.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bio-add',
  templateUrl: './bio-add.component.html',
  styleUrls: ['./bio-add.component.css']
})
export class BioAddComponent implements OnInit {
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  bioFormError = false;
  bio: Bio = new Bio();
  submitted = false;
  constructor( private bioService:BioService, private router: Router) { }

  ngOnInit(): void {
  }
  newBio(): void {
    this.submitted = false;
    this.bio = new Bio();
  }
  private bioAdd(){
    this.bioService.bioAdd(this.bio).subscribe(data =>console.log(data),
    error =>console.log(error));
    this.bio= new Bio();
    this.bioShow();
  }
  bioDetails(){
    this.submitted = true;
    this.bioAdd();
  }
  bioShow(){
    this.router.navigate(['/bio-dash/bio-show'])
  }  
  // userAddDetails= new FormGroup({
  //   redBag : new FormControl(''),
  //   blueBag : new FormControl(''),
  //   yellowBag : new FormControl(''),
  //   whiteBag : new FormControl(''),
    
  // });
  // onSubmit(){
  //   console.log(this.userAddDetails.value);
  //   console.log(this.userAddDetails.controls['redBag'].value);
  // }
  
  
}

//--------------------------------------------------------------------------------------------------------------
// import { Component, OnInit } from '@angular/core';

// // import { Popup } from 'ng2-opd-popup';
// import { Router } from '@angular/router';
// import { Raiserequest } from 'src/app/raiserequest';

// @Component({
//   selector: 'app-request',
//   templateUrl: './request.component.html',
//   styleUrls: ['./request.component.css']
// })
// export class RequestComponent implements OnInit {
//   states: Array<String> = ['Odisha', 'Karnataka'];
//   raiserequest: Raiserequest = new Raiserequest();
//   addUserFormError = false;
//   submitted = false;

//   constructor(private router: Router) { }

//   // ClickButton(){
//   //   this.popup.show();
//   // }

//   ngOnInit(): void {
//   }
//   pickUpShow(){
//     this.router.navigate(['/Plastic-Dash/pickUp'])
//   }

//   viewDetails(){
//     this.router.navigate(['/Plastic-Dash/viewDetails'])
//   }
// }
