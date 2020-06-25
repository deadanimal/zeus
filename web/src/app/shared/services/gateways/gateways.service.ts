import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Gateway } from './gateways.model';

@Injectable({
  providedIn: 'root'
})
export class GatewaysService {

  // URL
  public urlGateways: string = environment.baseUrl + 'v1/gateways/'

  // Data
  public gateway: Gateway
  public gateways: Gateway[] = []
  public gatewaysFiltered: Gateway[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Account> {
    return this.http.post<any>(this.urlGateways, body).pipe(
      tap((res) => {
        console.log('Gateway: ', res)
      })
    )
  }

  get(): Observable<Gateway[]> {
    return this.http.get<Gateway[]>(this.urlGateways).pipe(
      tap((res: Gateway[]) => {
        this.gateways = res
        console.log('Gateways: ', this.gateways)
      })
    )
  }

  getOne(id: string): Observable<Gateway> {
    let urlTemp = this.urlGateways + id + '/'
    return this.http.get<Gateway>(urlTemp).pipe(
      tap((res: Gateway) => {
        this.gateway = res
        console.log('Gateway: ', this.gateway)
      })
    )
  }

  update(id: string, body: Form): Observable<Gateway> {
    let urlTemp = this.urlGateways + id + '/'
    return this.http.patch<Gateway>(urlTemp, body).pipe(
      tap((res) => {
        this.gateway = res
        console.log('Gateway: ', this.gateway)
      })
    )
  }

  delete(id: string): Observable<any> {
    let urlTemp = this.urlGateways + id + '/'
    return this.http.delete<any>(urlTemp).pipe(
      tap((res) => {
        console.log('Gateway: ', res)
      })
    )
  }

  filter(field: string): Observable<Gateway[]> {
    let urlTemp = this.urlGateways + '?' + field
    return this.http.get<Gateway[]>(urlTemp).pipe(
      tap((res) => {
        this.gatewaysFiltered = res
        console.log('Gateways filtered: ', this.gatewaysFiltered)
      })
    )
  }

}
