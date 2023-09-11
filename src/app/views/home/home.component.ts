import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy  {
  opened: boolean;
  constructor(public router: Router) {

  }

  ngOnInit(): void {
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
