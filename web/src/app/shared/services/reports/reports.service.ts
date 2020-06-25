import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Report } from './reports.model';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  // URL
  public urlReports: string = environment.baseUrl + 'v1/reports/'

  // Data
  public reports: Report[] = []
  public reprt: Report

  constructor() { }
}
