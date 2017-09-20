import { Component,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { User }    from './user';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent  } from 'ng4-loading-spinner';
import { HttpModule, Http, Response } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new User('','',null,'','','');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newHero() {
   // this.model = new User('','');
  }
    name:string;
   constructor(
        private ng4LoadingSpinnerService: Ng4LoadingSpinnerService , private http: Http
    ) { 
   this.name = 'Amit Chaudhary';
   } 
    template: string ='<img src="app/login-form/Spinner.gif" />';
 public loading = true;
    
     startLoadingSpinner() {
      this.ng4LoadingSpinnerService.show();

    };


}