import { Component, OnInit, AfterViewInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import { SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

  form!: FormGroup;
  submitted = false;
  isReadOnly = true;
  user:any;
  loggedIn: any;


  constructor(public router: Router, private formBuilder: FormBuilder, private authService: SocialAuthService) {

  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      if(this.loggedIn){
        this.onSignIn();
      }
    });
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
    if(this.loggedIn){
      this.onSignIn();
    }
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
