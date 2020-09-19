import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Appliance } from './appliances.model';

@Injectable({
  providedIn: 'root'
})
export class AppliancesService {

  // URL
  public urlAppliances: string = environment.baseUrl + 'v1/appliances/'
  public urlActivity: string = environment.baseUrl + 'v1/appliance-activities/'

  // Data
  public appliance: Appliance
  public appliances: Appliance[] = []
  public appliancesFiltered: Appliance[] = []
  public activities: any[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Appliance> {
    return this.http.post<any>(this.urlAppliances, body).pipe(
      tap((res) => {
        console.log('Appliance: ', res)
      })
    )
  }

  get(): Observable<Appliance[]> {
    return this.http.get<Appliance[]>(this.urlAppliances).pipe(
      tap((res: Appliance[]) => {
        this.appliances = res
        console.log('Appliances: ', this.appliances)
      })
    )
  }

  getOne(id: string): Observable<Appliance> {
   let urlID = this.urlAppliances + id + '/'
   return this.http.get<Appliance>(urlID).pipe(
     tap((res: Appliance) => {
      this.appliance = res
       console.log('Appliance: ', this.appliance)
     })
   )
 }

  update(id: string, body: Form): Observable<Appliance> {
    let urlTemp = this.urlAppliances + id + '/'
    return this.http.patch<Appliance>(urlTemp, body).pipe(
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

  filter(field: string): Observable<Appliance[]> {
    let urlTemp = this.urlAppliances + '?' + field
    return this.http.get<Appliance[]>(urlTemp).pipe(
      tap((res) => {
        this.appliancesFiltered = res
        console.log('Appliances filtered: ', this.appliancesFiltered)
      })
    )
  }

  getActivity(): Observable<any[]> {
    return this.http.get<any[]>(this.urlActivity).pipe(
      tap((res: any[]) => {
        this.activities = res
        console.log('Activity: ', this.activities)
      })
    )
  }

}