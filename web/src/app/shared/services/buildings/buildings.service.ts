import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Building } from './buildings.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  // URL
  public urlBuildings: string = environment.baseUrl + 'v1/buildings/'

  // Data
  public building: Building
  public buildings: Building[] = []
  public buildingsFiltered: Building[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Building> {
    return this.http.post<any>(this.urlBuildings, body).pipe(
      tap((res) => {
        console.log('Building: ', res)
      })
    )
  }

  get(): Observable<Building[]> {
    return this.http.get<Building[]>(this.urlBuildings).pipe(
      tap((res: Building[]) => {
        this.buildings = res
        console.log('Buildings: ', this.buildings)
      })
    )
  }

  getOne(id: string): Observable<Building> {
    let urlTemp = this.urlBuildings + id + '/'
    return this.http.get<Building>(urlTemp).pipe(
      tap((res: Building) => {
        this.building = res
        console.log('Building: ', this.building)
      })
    )
  }

  update(id: string, body: Form): Observable<Building> {
    let urlTemp = this.urlBuildings + id + '/'
    return this.http.patch<Building>(urlTemp, body).pipe(
      tap((res) => {
        console.log('Building: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    let urlTemp = this.urlBuildings + id + '/'
    return this.http.delete<any>(urlTemp).pipe(
      tap((res) => {
        console.log('Building: ', res)
      })
    )
  }

  filter(field: string): Observable<Building[]> {
    let urlTemp = this.urlBuildings + '?' + field
    return this.http.get<Building[]>(urlTemp).pipe(
      tap((res) => {
        this.buildingsFiltered = res
        console.log('Buildings filtered: ', this.buildingsFiltered)
      })
    )
  }

}
