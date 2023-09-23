import { Component, OnInit, AfterViewInit, OnDestroy, } from '@angular/core';
import { NgIf } from '@angular/common';
import { SocialAuthService } from "@abacritt/angularx-social-login";


import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy  {
  opened: boolean;
  user: any = null;
  constructor(public router: Router, private authService: SocialAuthService) {

  }

  ngOnInit(): void {
    // if(this.user == null) {
    //   this.router.navigate(['/']);
    // }
    this.authService.authState.subscribe((state)=>{
      this.user = state;
    })
  }

  ngOnDestroy() {
  }

  ngAfterViewInit() {
  }

  onBook(): void {
    this.router.navigate(['/booking-dashboard']);
  }

  onInventory(): void {
    this.router.navigate(['/manage-inventory']);
  }

  onBilling(): void {
    this.router.navigate(['/manage-billing']);
  }

}
