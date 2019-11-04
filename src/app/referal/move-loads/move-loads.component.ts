import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import * as utils from 'lodash';

@Component({
  selector: 'app-move-loads',
  templateUrl: './move-loads.component.html',
  styleUrls: ['./move-loads.component.scss']
})
export class MoveLoadsComponent implements OnInit {
  @ViewChild('fromLocationPref', {static: false}) fromLocationPref;
  @ViewChild('toLocationPref', {static: false}) toLocationPref;

  licenseId:string;
  error_submit:boolean;
  candidate_name:string;
  candidate_nameError:boolean;
  emp_phone:string;
  emp_phoneNoError:boolean;
  EmailError:boolean;
  Email:string;
  ssn: string;
  ssnError: boolean;
  fromLocation:string;
  toLocation:string;
  submitted:boolean;
  suggestionResult: Array<string>;
  locationData: Array<string>;
  fromTimePref: string;
  toTimePref: string;
  constructor(private readonly changeDetector:ChangeDetectorRef) { 
    this.licenseId = '';
    this.error_submit = false;
    this.candidate_name = '';
    this.candidate_nameError = false;
    this.emp_phone = '';
    this.emp_phoneNoError = false;
    this.EmailError = false;
    this.Email = '';
    this.fromLocation = '';
    this.toLocation = '';
    this.submitted = false;
    this.locationData = ['Bloomington','Peoria','Rockford','Davenport'];
    this.suggestionResult = [];
    this.fromTimePref = '';
    this.toTimePref = '';
    this.ssn = '';
    this.ssnError = false;
  }

  ngOnInit() {
  }

  phoneNumberValidation(errorVar, value) {
    const pattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!pattern.test(this[value])) {
      this[errorVar] = true;
    } else {
      this[errorVar] = false;
    }
  }

  emailValidation(dataToCheck, dataFlag) {
    // tslint:disable-next-line: max-line-length
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(this[dataToCheck])) {
      this[dataFlag] = true;
    } else {
      this[dataFlag] = false;
    }
  }
  ssnValidation(dataToCheck,dataFlag){
    if(this[dataToCheck].length === 9){
      this[dataFlag] = false;
    } else {
      this[dataFlag] = true;
    }
  }

  nameValidator() {
    const pattern =  /^[a-zA-Z\s]*$/;
    if (!pattern.test(this.candidate_name)) {
      this.candidate_nameError = true;
    } else {
      this.candidate_nameError = false;
    }
  }
  onDropDownClick(response, keyName: string) {
    this.suggestionResult = [];
    if (this[keyName]) {
      this[keyName].forEach(element => {
        if (element && element.toString().toLowerCase().indexOf(response.query.toLowerCase()) !== -1) {
          this.suggestionResult.push(element);
        }
        this.suggestionResult = utils.sortBy(this.suggestionResult);
      });
      this.suggestionResult = utils.differenceBy(this.suggestionResult,[this.fromLocation,this.toLocation]);
    }
  }
  submitDetails() {
    this.error_submit = true;
    this.fromLocationPref.control.markAsTouched();
    this.toLocationPref.control.markAsTouched();
    console.log(this.error_submit);
    debugger
    if (this.candidate_nameError || this.emp_phoneNoError || !this.licenseId || !this.candidate_name  || !this.fromLocation|| !this.toLocation || !this.emp_phone || this.EmailError || !this.Email || !this.ssn) {
      return;
    } else {
      this.submitted = true;
      this.changeDetector.detectChanges();
    }
  }
}
