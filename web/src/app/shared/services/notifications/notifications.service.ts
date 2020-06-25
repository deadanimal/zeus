import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Notification } from './notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  // URL
  public urlNotifications: string = environment.baseUrl + 'v1/notifications/'

  // Data
  public notification: Notification
  public notifications: Notification[] = []
  public notficationsFiltered: Notification[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Notification> {
    return this.http.post<any>(this.urlNotifications, body).pipe(
      tap((res) => {
        console.log('Notification: ', res)
      })
    )
  }

  get(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.urlNotifications).pipe(
      tap((res: Notification[]) => {
        this.notifications = res
        console.log('Notifications: ', this.notifications)
      })
    )
  }

  getOne(id: string): Observable<Notification> {
    let urlTemp = this.urlNotifications + id + '/'
    return this.http.get<Notification>(urlTemp).pipe(
      tap((res: Notification) => {
        this.notification = res
        console.log('Notification: ', this.notification)
      })
    )
  }

  filter(field: string): Observable<Notification[]> {
    let urlTemp = this.urlNotifications + '?' + field
    return this.http.get<Notification[]>(urlTemp).pipe(
      tap((res) => {
        this.notficationsFiltered = res
        console.log('Notifications filtered: ', this.notficationsFiltered)
      })
    )
  }
}
