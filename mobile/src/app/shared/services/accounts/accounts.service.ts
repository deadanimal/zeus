import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Account } from './accounts.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  // URL
  public urlAccounts: string = environment.baseUrl + 'v1/accounts/'

  // Data
  public account: Account
  public accounts: Account[] = []
  public accountsFiltered: Account[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Account> {
    return this.http.post<any>(this.urlAccounts, body).pipe(
      tap((res) => {
        console.log('Account: ', res)
      })
    )
  }

  get(): Observable<Account[]> {
    return this.http.get<Account[]>(this.urlAccounts).pipe(
      tap((res: Account[]) => {
        this.accounts = res
        console.log('Accounts: ', this.accounts)
      })
    )
  }

  getOne(id: string): Observable<Account> {
    let urlTemp = this.urlAccounts + id + '/'
    return this.http.get<Account>(urlTemp).pipe(
      tap((res: Account) => {
        this.account = res
        console.log('Account: ', this.account)
      })
    )
  }

  update(id: string, body: Form): Observable<Account> {
    let urlTemp = this.urlAccounts + id + '/'
    return this.http.patch<Account>(urlTemp, body).pipe(
      tap((res) => {
        this.account = res
        console.log('Account: ', this.account)
      })
    )
  }

  delete(id: string): Observable<any> {
    let urlTemp = this.urlAccounts + id + '/'
    return this.http.delete<any>(urlTemp).pipe(
      tap((res) => {
        console.log('Account: ', res)
      })
    )
  }

  filter(field: string): Observable<Account[]> {
    let urlTemp = this.urlAccounts + '?' + field
    return this.http.get<Account[]>(urlTemp).pipe(
      tap((res) => {
        this.accountsFiltered = res
        console.log('Accounts filtered: ', this.accountsFiltered)
      })
    )
  }

}
