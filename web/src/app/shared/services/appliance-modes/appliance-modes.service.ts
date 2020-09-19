import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApplianceMode } from './appliance-modes.model';


@Injectable({
  providedIn: 'root'
})
export class ApplianceModesService {

  // URL
  public urlAppliances: string = environment.baseUrl + 'v1/appliance_transaction_modes/'

  // Data
  public appliance: ApplianceMode
  public appliances: ApplianceMode[] = []
  public appliancesFiltered: ApplianceMode[] = []

  public chart_1
  public chart_2

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<ApplianceMode> {
    return this.http.post<any>(this.urlAppliances, body).pipe(
      tap((res) => {
        console.log('Appliance: ', res)
      })
    )
  }

  get(): Observable<ApplianceMode[]> {
    return this.http.get<ApplianceMode[]>(this.urlAppliances).pipe(
      tap((res: ApplianceMode[]) => {
        this.appliances = res
        console.log('Appliances: ', this.appliances)
      })
    )
  }

  getOne(id: string): Observable<ApplianceMode> {
   let urlID = this.urlAppliances + id + '/'
   return this.http.get<ApplianceMode>(urlID).pipe(
     tap((res: ApplianceMode) => {
      this.appliance = res
       console.log('Appliance: ', this.appliance)
     })
   )
 }

  update(id: string, body: Form): Observable<ApplianceMode> {
    let urlTemp = this.urlAppliances + id + '/'
    return this.http.patch<ApplianceMode>(urlTemp, body).pipe(
      tap((res) => {
        this.appliance = res
        console.log('Appliance: ', this.appliance)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlAppliances + id + '/').pipe(
      tap((res) => {
        console.log('Appliance: ', res)
      })
    )
  }

  filter(field: string): Observable<ApplianceMode[]> {
    let urlTemp = this.urlAppliances + '?' + field
    return this.http.get<ApplianceMode[]>(urlTemp).pipe(
      tap((res) => {
        this.appliancesFiltered = res
        console.log('Appliances filtered: ', this.appliancesFiltered)
      })
    )
  }

  getChart1() {
    let urlTemp = this.urlAppliances + 'chart_1/'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.chart_1 = res
        // console.log('Appliances filtered: ', this.appliancesFiltered)
      })
    )
  }

  getChart2() {
    let urlTemp = this.urlAppliances + 'chart_2/'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.chart_2 = res
        // console.log('Appliances filtered: ', this.appliancesFiltered)
      })
    )
  }

}
