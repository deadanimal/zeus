import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  // URL
  public url: string = environment.baseUrl + 'v1/devices/malas/'
  public urlValue: string = environment.baseUrl + 'v1/device-values/'

  // Data
  public file: any
  public files: any[] = []

  constructor(
    private http: HttpClient
  ) { }

  getCSV(file_link: any) {
    return this.http.get(file_link, { responseType: 'text'} )
  }

  get(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res: any) => {
        this.file = res
        // console.log('File url: ', this.file)
      })
    )
  }

  post(body: any): Observable<any> {
    return this.http.post<any>(this.urlValue, body).pipe(
      tap((res: any) => {
        // console.log('File url: ', this.file)
      })
    )
  }

}
