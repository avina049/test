import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appBioNumberValidation]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:BioNumberValidationDirective,
    multi:true
  }]
})
export class BioNumberValidationDirective {

  validate(control:AbstractControl):{[key:string]:any}|null{
    if(control.value <0){
      return{invalidNo: true};
    }
    return null;
  }
  constructor() { }

}
