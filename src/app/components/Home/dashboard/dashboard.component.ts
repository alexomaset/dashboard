import { Component, OnInit } from '@angular/core';
import { Report, SubjectResult } from 'src/app/report';
import { ReportService } from 'src/app/report.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   reports!: Report;
   

  constructor(private _reportService: ReportService) {
    
   }

  ngOnInit(): void {
    this._reportService.getReports()
    .subscribe(data => this.reports = data);
   
  }

}
