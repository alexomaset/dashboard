import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Report } from './report';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private _url: string = "./assets/data.json";

  constructor(private httpClient: HttpClient) {
    this.getReports().subscribe(data => {
      console.log(data);
    })
   }

  public getReports(): Observable<Report>{
    return this.httpClient.get<Report>(this._url);
   
  }
  

}
