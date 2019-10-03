import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referal',
  templateUrl: './referal.component.html',
  styleUrls: ['./referal.component.scss']
})
export class ReferalComponent implements OnInit {
  empType: string;
  constructor(private readonly router: Router) {
    this.empType = 'emp';
   }

  ngOnInit() {

  }
  route() {
    console.log(this.empType);
    this.router.navigate(['referal', this.empType]);
  }
}
