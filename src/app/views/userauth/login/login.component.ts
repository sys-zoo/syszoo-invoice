import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

  form!: FormGroup;
  submitted = false;
  isReadOnly = true;

  constructor(public router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        userMail: ['',
          [
            Validators.required,
            Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),
            Validators.minLength(1)
          ]],
        userPass: ['',
          [
            Validators.required,
            Validators.minLength(8),
          ]]
      }
    );
    setTimeout(() => {
      this.isReadOnly = false;
    }, 2000);
  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSignIn(): void {
    this.router.navigate(['/home']);
  }

  onForgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  onDoYouHaveAccount(): void {
    this.router.navigate(['/signup']);
  }

  
}
