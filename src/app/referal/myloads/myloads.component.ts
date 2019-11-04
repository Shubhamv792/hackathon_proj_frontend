import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myloads',
  templateUrl: './myloads.component.html',
  styleUrls: ['./myloads.component.scss']
})
export class MyloadsComponent implements OnInit {
  loads:Array<object>;
  selectedLoads: Array<object>;
  loadColumnSet: Array<object>;
  submitted: boolean;
  constructor() { 
    this.loadColumnSet = [
      { field: 'loadNum', header: 'Load Number' },
      { field: 'truck', header: 'Truck' },
      { field: 'pickApp', header: 'Pickup Appointment' },
      { field: 'pickAppStatus', header: 'Pickup Appointment Status' },
      { field: 'origin', header: 'Origin' },
      { field: 'dest', header: 'Destination'},
    ];
    this.submitted = false;
    this.loads = [{'loadNum':"GZ12134",
    'truck':"JBHU928405",
    'pickApp':"03/29/2019 10:00PMCST",
    'pickAppStatus':"Unconfirmed",
    'origin':"CocaCola(COCA)3791BrownsMillCairo,GA31728",
    'dest':"CocaCola(COCA)3791BrownsMillCairo,GA31728"
    },{'loadNum':"GZ12135",
    'truck':"JBHU928405",
    'pickApp':"03/29/2019 10:00PMCST",
    'pickAppStatus':"Unconfirmed",
    'origin':"CocaCola(COCA)3791BrownsMillCairo,GA31728",
    'dest':"CocaCola(COCA)3791BrownsMillCairo,GA31728"
    },{'loadNum':"GZ12136",
    'truck':"JBHU928405",
    'pickApp':"03/29/2019 10:00PMCST",
    'pickAppStatus':"Unconfirmed",
    'origin':"CocaCola(COCA)3791BrownsMillCairo,GA31728",
    'dest':"CocaCola(COCA)3791BrownsMillCairo,GA31728"
    },{'loadNum':"GZ12137",
    'truck':"JBHU928405",
    'pickApp':"03/29/2019 10:00PMCST",
    'pickAppStatus':"Unconfirmed",
    'origin':"CocaCola(COCA)3791BrownsMillCairo,GA31728",
    'dest':"CocaCola(COCA)3791BrownsMillCairo,GA31728"
    }];
    this.selectedLoads = [];
  }
  onSaveLoadPreference() {
    this.submitted = true;
  }
  ngOnInit() {
  }

}
