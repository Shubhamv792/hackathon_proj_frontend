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

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import { MoveLoadsComponent } from './referal/move-loads/move-loads.component';
import { MyloadsComponent } from './referal/myloads/myloads.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    ReferalComponent,
    EmployeeComponent,
    NonEmployeeComponent,
    ReferalHeaderComponent,
    HrpageComponent,
    MoveLoadsComponent,
    MyloadsComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    TableModule,
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    CardModule,
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
