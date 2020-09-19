import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  // URL
  public urlAppliances: string = environment.baseUrl + 'v1/appliances/'
  public urlActivity: string = environment.baseUrl + 'v1/appliance-activities/'

  // Data
  public activities: any[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<any> {
    return this.http.post<any>(this.urlActivity, body).pipe(
      tap((res) => {
        console.log('Appliance: ', res)
      })
    )
  }

}
