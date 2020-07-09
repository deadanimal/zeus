import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Plant } from './plants.model';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  // URL
  public urlPlants: string = environment.baseUrl + 'v1/plants/'

  // Data
  public plant: Plant
  public plants: Plant[] = []
  public plantsFiltered: Plant[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Plant> {
    return this.http.post<any>(this.urlPlants, body).pipe(
      tap((res) => {
        console.log('Plant: ', res)
      })
    )
  }

  get(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.urlPlants).pipe(
      tap((res: Plant[]) => {
        this.plants = res
        console.log('Plants: ', this.plants)
      })
    )
  }

  getOne(id: string): Observable<Plant> {
    let urlTemp = this.urlPlants + id + '/'
    return this.http.get<Plant>(urlTemp).pipe(
      tap((res: Plant) => {
        this.plant = res
        console.log('Plant: ', this.plant)
      })
    )
  }

  update(id: string, body: Form): Observable<Plant> {
    let urlTemp = this.urlPlants + id + '/'
    return this.http.patch<Plant>(urlTemp, body).pipe(
      tap((res) => {
        this.plant = res
        console.log('Plant: ', this.plant)
      })
    )
  }

  delete(id: string): Observable<any> {
    let urlTemp = this.urlPlants + id + '/'
    return this.http.delete<any>(urlTemp).pipe(
      tap((res) => {
        console.log('Plant: ', res)
      })
    )
  }

  filter(field: string): Observable<Plant[]> {
    let urlTemp = this.urlPlants + '?' + field
    return this.http.get<Plant[]>(urlTemp).pipe(
      tap((res) => {
        this.plantsFiltered = res
        console.log('Plants filtered: ', this.plantsFiltered)
      })
    )
  }

}
