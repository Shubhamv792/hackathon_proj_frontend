import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private readonly httpClient:HttpClient) {

  }

  getEmpJobDetails():Observable<object> {
    return this.httpClient.get('https://referal-backend.herokuapp.com/api/emp');
  }
  getNonEmpJobDetails():Observable<object> {
    return this.httpClient.get('https://referal-backend.herokuapp.com/api/nonemp');
  }
}
