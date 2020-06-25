import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Bill } from './bills.model';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  // URL
  public urlBills: string = environment.baseUrl + 'v1/bills/'

  // Data
  public bill: Bill
  public bills: Bill[] = []
  public billsFiltered: Bill[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Bill> {
    return this.http.post<any>(this.urlBills, body).pipe(
      tap((res) => {
        console.log('Bill: ', res)
      })
    )
  }

  get(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.urlBills).pipe(
      tap((res: Bill[]) => {
        this.bills = res
        console.log('Bills: ', this.bills)
      })
    )
  }

  getOne(id: string): Observable<Bill> {
    let urlTemp = this.urlBills + id + '/'
    return this.http.get<Bill>(urlTemp).pipe(
      tap((res: Bill) => {
        this.bill = res
        console.log('Bill: ', this.bill)
      })
    )
  }

  update(id: string, body: Form): Observable<Bill> {
    let urlTemp = this.urlBills + id + '/'
    return this.http.patch<Bill>(urlTemp, body).pipe(
      tap((res) => {
        this.bill = res
        console.log('Bill: ', this.bill)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlBills + id + '/').pipe(
      tap((res) => {
        console.log('Bill: ', res)
      })
    )
  }

  filter(field: string): Observable<Bill[]> {
    let urlTemp = this.urlBills + '?' + field
    return this.http.get<Bill[]>(urlTemp).pipe(
      tap((res) => {
        this.billsFiltered = res
        console.log('Bills filtered: ', this.billsFiltered)
      })
    )
  }

}
