import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // URL
  public urlUsers: string = environment.baseUrl + 'v1/users/'

  // Data
  public user: User
  public users: User[] = []
  public usersFiltered: User[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<User> {
    return this.http.post<any>(this.urlUsers, body).pipe(
      tap((res) => {
        console.log('User: ', res)
      })
    )
  }

  get(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers).pipe(
      tap((res: User[]) => {
        this.users = res
        console.log('Users: ', this.users)
      })
    )
  }

  getOne(id: string): Observable<User> {
    let urlID = this.urlUsers + id + '/'
    return this.http.get<User>(urlID).pipe(
      tap((res: User) => {
        this.user = res
        console.log('User: ', this.user)
      })
    )
  }

  update(id: string, body: Form): Observable<User> {
    let urlTemp = this.urlUsers + id + '/'
    return this.http.patch<User>(urlTemp, body).pipe(
      tap((res) => {
        this.user = res
        console.log('User: ', this.user)
      })
    )
  }

  delete(id: string): Observable<any> {
    let urlTemp = this.urlUsers + id + '/'
    return this.http.delete<any>(urlTemp).pipe(
      tap((res) => {
        console.log('User: ', res)
      })
    )
  }

  filter(field: string): Observable<User[]> {
    let urlTemp = this.urlUsers + '?' + field
    return this.http.get<User[]>(urlTemp).pipe(
      tap((res) => {
        this.usersFiltered = res
        console.log('Users filtered: ', this.usersFiltered)
      })
    )
  }

}
