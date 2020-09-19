import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseAppliance } from './base-appliances.model';

@Injectable({
  providedIn: 'root'
})
export class BaseAppliancesService {

  // URL
  public urlBaseAppliances: string = environment.baseUrl + 'v1/base-appliances/'

  // Data
  public baseAppliance: BaseAppliance
  public baseAppliances: BaseAppliance[] = []
  public baseAppliancesFiltered: BaseAppliance[] = []

  public chart_1
  public chart_2

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<BaseAppliance> {
    return this.http.post<any>(this.urlBaseAppliances, body).pipe(
      tap((res) => {
        console.log('Appliance: ', res)
      })
    )
  }

  get(): Observable<BaseAppliance[]> {
    return this.http.get<BaseAppliance[]>(this.urlBaseAppliances).pipe(
      tap((res: BaseAppliance[]) => {
        this.baseAppliances = res
        console.log('Base appliances: ', this.baseAppliances)
      })
    )
  }

  getOne(id: string): Observable<BaseAppliance> {
    let urlTemp = this.urlBaseAppliances + id + '/'
    return this.http.get<BaseAppliance>(urlTemp).pipe(
      tap((res: BaseAppliance) => {
        this.baseAppliance = res
        console.log('Base appliance: ', this.baseAppliance)
      })
    )
  }

  update(id: string, body: Form): Observable<BaseAppliance> {
    let urlTemp = this.urlBaseAppliances + id + '/'
    return this.http.patch<BaseAppliance>(urlTemp, body).pipe(
      tap((res) => {
        console.log('Appliance: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    let urlTemp = this.urlBaseAppliances + id + '/'
    return this.http.delete<any>(urlTemp).pipe(
      tap((res) => {
        console.log('Appliance: ', res)
      })
    )
  }

  filter(field: string): Observable<BaseAppliance[]> {
    let urlTemp = this.urlBaseAppliances + '?' + field
    return this.http.get<BaseAppliance[]>(urlTemp).pipe(
      tap((res) => {
        this.baseAppliancesFiltered = res
        console.log('Base appliances filtered: ', this.baseAppliancesFiltered)
      })
    )
  }

  getChart1(): Observable<any> {
    let urlTemp = this.urlBaseAppliances + 'chart_1/'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.chart_1 = res
        // console.log('Base appliances filtered: ', this.baseAppliancesFiltered)
      })
    )
  }

  getChart2(): Observable<any> {
    let urlTemp = this.urlBaseAppliances + 'chart_2/'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        this.chart_2 = res
        // console.log('Base appliances filtered: ', this.baseAppliancesFiltered)
      })
    )
  }
  

}
