import { HrpageComponent } from './referal/hrpage/hrpage.component';
import { ReferalHeaderComponent } from './referal/referal-header/referal-header.component';
import { NonEmployeeComponent } from './referal/nonemployee/nonemployee.component';
import { EmployeeComponent } from './referal/employee/employee.component';
import { ReferalComponent } from './referal/referal.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {CheckboxModule} from 'primeng/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    ReferalComponent,
    EmployeeComponent,
    NonEmployeeComponent,
    ReferalHeaderComponent,
    HrpageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ScrollPanelModule,
    InputSwitchModule,
    ButtonModule,
    CheckboxModule,
    AutoCompleteModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
