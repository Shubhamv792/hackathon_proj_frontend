import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  empTypes: Array<object>;
  currentEmpType: object;
  cols: Array<object>;
  values: Array<object>;
  loading: boolean;
  empColumnSet: Array<object> = [
    { field: 'candidateName', header: 'Candidate Name' },
    { field: 'phoneNumber', header: 'Phone Number' },
    { field: 'candidateEmailId', header: 'Candidate EmailId' },
    { field: 'candidatePhoneNumber', header: 'Candidate Phone Number' }
  ];
  nonEmpColumnSet: Array<object> = [
    { field: 'geoPref', header: 'Geographic Preference' },
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'phoneNumber', header: 'Phone Number' },
    { field: 'emailAddress', header: 'Email Address' },
    { field: 'address', header: 'Address' },
    { field: 'driverLicense', header: 'Driver\'s License' },
    { field: 'driveAtNight', header: 'Can Driver At Night?' }
  ];
  constructor(private readonly jobsService: JobsService) {
    this.empTypes = [{ label: 'Employee', value: 'emp' }, { label: 'Nonemployee', value: 'nonemp' }];
    this.currentEmpType = { label: 'Employee', value: 'emp' };
    this.loading = false;
    this.cols = [];
    this.values = [];
  }

  ngOnInit() {
    this.populateEmpGrid();
  }
  populateEmpGrid() {
    this.loading = true;
    this.jobsService.getEmpJobDetails().subscribe((data: Array<object>) => {
      this.loading = false;
      this.values = data;
      this.cols = this.empColumnSet;
    });
  }
  populateNonEmpGrid() {
    this.loading = true;
    this.jobsService.getNonEmpJobDetails().subscribe((data: Array<object>) => {
      this.loading = false;
      this.values = data;
      this.cols = this.nonEmpColumnSet;
    });
  }
  onChangeDropdown(event) {
    console.log(event.value.label);
    if (event.value.value === 'emp') {
      this.populateEmpGrid();
    } else {
      this.populateNonEmpGrid();
    }
  }
  refreshData() {
    if (this.currentEmpType['value'] === 'emp') {
      this.populateEmpGrid();
    } else {
      this.populateNonEmpGrid();
    }
  }
}
