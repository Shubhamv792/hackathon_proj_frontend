import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  // @ViewChild('tt') dataTable: Table;
  Id: string;
  candidate_name: string;
  emp_phone: string;
  candidate_email: string;
  candidate_phone: string;
  error_submit: boolean;
  emp_phoneNoError: boolean;
  candidate_emailError: boolean;
  candidate_nameError: boolean;
  emp_CandidatephoneNoError: boolean;
  IdError: boolean;
  submited: boolean;
  EmailError: boolean;
  Email: string;
  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private readonly httpClient: HttpClient,
    private messageService: MessageService) {
    this.Id = '';
    this.Email = '';
    this.candidate_name = '';
    this.emp_phone = '';
    this.candidate_email = '';
    this.candidate_phone = '';
    this.error_submit = false;
    this.IdError = false;
    this.submited = false;
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
  nameValidator() {
    const pattern =  /^[a-zA-Z\s]*$/;
    if (!pattern.test(this.candidate_name)) {
      this.candidate_nameError = true;
    } else {
      this.candidate_nameError = false;
    }
  }
  submitDetails() {
    // this.error_submit = (this.Id || this.candidate_name ||
    //   this.emp_phone || this.candidate_email || this.candidate_phone) ? false : true;
    this.error_submit = true;
    console.log(this.error_submit);
    if (this.candidate_nameError || this.emp_phoneNoError || this.candidate_emailError ||
       this.emp_CandidatephoneNoError || !this.Id || !this.candidate_name || !this.emp_phone || !this.candidate_email
       || !this.candidate_phone || this.EmailError || !this.Email) {
            return;
    } else {
      this.httpClient.post('https://referal-backend.herokuapp.com/api/emp', this.getParameters()).subscribe(val => {
        this.submited = true;
      }, err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error in Saving For Details'
        });
      });
    }


    this.changeDetectorRef.detectChanges();
  }
  getParameters() {
    return {
      Id: this.Id,
      Email: this.Email,
      candidateName: this.candidate_name,
      phoneNumber: this.emp_phone,
      candidateEmailId: this.candidate_email,
      candidatePhoneNumber: this.candidate_phone
    };
  }
}
