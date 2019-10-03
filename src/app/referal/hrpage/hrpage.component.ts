import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hrpage',
  templateUrl: './hrpage.component.html',
  styleUrls: ['./hrpage.component.scss']
})
export class HrpageComponent implements OnInit {
  details: any;
  qrCodesData: any;
  qrvalue: any;
  id: Number;
  constructor(private readonly activatedRoute: ActivatedRoute,private readonly httpClient:HttpClient,private messageService:MessageService) {
    

    // this.details = [
    //   {
    //     header: 'OVER THE ROAD TRUCK DRIVER',
    //     location : 'Arkansas',
    //     star : 'Drivers enjoy no touch freight!',
    //     truck : 'Dedicated',
    //     cost: 'Average yearly gross $57,000 - 70,369',
    //     exprience : '3 months truck driving experience',
    //     qrcode: ['1'],
    //     showQr: false
    //   },
    //   {
    //     header: 'OVER THE ROAD TRUCK DRIVER',
    //     location : 'Arkansas',
    //     star : 'Drivers enjoy no touch freight!',
    //     truck : 'Dedicated',
    //     cost: 'Average yearly gross $57,000 - 70,369',
    //     exprience : '3 months truck driving experience',
    //     qrcode: [],
    //     showQr: false
    //   }];
    this.qrCodesData= [{
      data: 'QR Code #345 - Cafeteria',
      id: '1'
    },
    {
      data: 'QR Code #125 - Main Hall',
      id: '2'
    }];
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.id = this.activatedRoute.snapshot.params['id'];
      this.httpClient.get(`https://referal-backend.herokuapp.com/api/hr/${this.id}`).subscribe(val => {
        this.details = val;
      }, err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error in Saving For Details'
        });
      });
    }
  }
  linkQrButton(index) {
    this.details[index].showQr = !this.details[index].showQr;
  }
}
