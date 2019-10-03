import { Component, OnInit } from '@angular/core';
import * as utils from 'lodash';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee',
  templateUrl: './nonemployee.component.html',
  styleUrls: ['./nonemployee.component.scss']
})
export class NonEmployeeComponent implements OnInit {
  firstName: string;
  firstNameError: boolean;
  lastName: string;
  lastNameError: boolean;
  emp_phone: string;
  empphoneError: boolean;
  address: string;
  emailAddress: string;
  suggestionResult: any;
  driverLicence: string;
  emailAddressError: boolean;
  error_submit: boolean;
  driveAtNight: boolean;
  locationData: any;
  location: any;
  submited: boolean;
  constructor(private readonly httpClient: HttpClient, private messageService: MessageService) {
    this.firstName = '';
    this.lastName = '';
    this.emp_phone = '';
    this.address = '';
    this.emailAddress = '';
    this.driveAtNight = true;
    this.driverLicence = '';
    this.location = [];
    this.submited = false;
    // this.locationData = ['Arkansas', 'Iowa', 'Texas', 'Alabama', 'Alaska',
    //   'Arizona',
    //   'California',
    //   'Colorado',
    //   'Connecticut',
    //   'Delaware',
    //   'Florida',
    //   'Georgia',
    //   'Hawaii',
    //   'Idaho',
    //   'Illinois',
    //   'Indiana',
    //   'Iowa',
    //   'Kansas',
    //   'Kentucky',
    //   'Louisiana',
    //   'Maine',
    //   'Maryland',
    //   'Massachusetts',
    //   'Michigan',
    //   'Minnesota',
    //   'Mississippi',
    //   'Missouri',
    //   'Montana',
    //   'Nebraska',
    //   'Nevada',
    //   'New Hampshire',
    //   'New Jersey',
    //   'New Mexico',
    //   'New York',
    //   'North Carolina',
    //   'North Dakota',
    //   'Ohio',
    //   'Oklahoma',
    //   'Oregon',
    //   'Pennsylvania',
    //   'Rhode Island',
    //   'South Carolina',
    //   'South Dakota',
    //   'Tennessee',
    //   'Utah',
    //   'Vermont',
    //   'Virginia',
    //   'Washington',
    //   'West Virginia',
    //   'Wisconsin',
    //   'Wyoming'];
  }

  ngOnInit() {
    // this.locationdatas();
    this.httpClient.get(`https://referal-backend.herokuapp.com/api/location`).subscribe(val => {
      val = utils.uniqBy(val);
      this.locationData = val;
      }, err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error in Saving For Details'
        });
      });
  }
  phoneNumberValidation(errorVar, value) {
    const pattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!pattern.test(this[value])) {
      this[errorVar] = true;
    } else {
      this[errorVar] = false;
    }
  }
  emailValidation() {
    // tslint:disable-next-line: max-line-length
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(this.emailAddress)) {
      this.emailAddressError = true;
    } else {
      this.emailAddressError = false;
    }
  }
  nameValidator(datatoCheck, Fieldname) {
    const pattern = /^[a-zA-Z\s]*$/;
    if (!pattern.test(this[datatoCheck])) {
      this[Fieldname] = true;
    } else {
      this[Fieldname] = false;
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
    }
  }
  submitDetails() {
    this.error_submit = true;
    if (!this.firstName || this.firstNameError || !this.lastName ||
      this.lastNameError || !this.emp_phone || this.empphoneError || !this.address || !this.emailAddress ||
      this.emailAddressError || !this.driverLicence || (this.location.length < 0) ) {
        console.log('ss');
        return;
    } else {
      this.httpClient.post('https://referal-backend.herokuapp.com/api/nonemp', this.getParameters()).subscribe(val => {
        this.submited = true;
      }, err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error in Saving For Details'
        });
      });
    }
    console.log('happy');
  }
  getParameters() {
    return {
      firstName: this.firstName,
      lastName : this.lastName,
      phoneNumber: this.emp_phone,
      emailAddress: this.emailAddress,
      address : this.address,
      driverLicense: this.driverLicence,
      driveAtNight: this.driveAtNight,
      geoPref: this.location
    };
  }
}
