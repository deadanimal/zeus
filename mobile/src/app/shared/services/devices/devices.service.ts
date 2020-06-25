import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Device } from './devices.model';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  // URL
  public urlDevices: string = environment.baseUrl + 'v1/devices/'
  public urlDeviceValues: string = environment.baseUrl + 'v1/device-values/'

  // Data
  public device: Device
  public devices: Device[] = []
  public devicesFiltered: Device[] = []

  public deviceValues: any[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Device> {
    return this.http.post<any>(this.urlDevices, body).pipe(
      tap((res) => {
        console.log('Device: ', res)
      })
    )
  }

  get(): Observable<Device[]> {
    return this.http.get<Device[]>(this.urlDevices).pipe(
      tap((res: Device[]) => {
        this.devices = res
        console.log('Devices: ', this.devices)
      })
    )
  }

  getOne(id: string): Observable<Device> {
    let urlTemp = this.urlDevices + id + '/'
    return this.http.get<Device>(urlTemp).pipe(
      tap((res: Device) => {
        this.device = res
        console.log('Device: ', this.device)
      })
    )
  }

  update(id: string, body: Form): Observable<Device> {
    let urlTemp = this.urlDevices + id + '/'
    return this.http.patch<Device>(urlTemp, body).pipe(
      tap((res) => {
        this.device = res
        console.log('Device: ', this.device)
      })
    )
  }

  delete(id: string): Observable<any> {
    let urlTemp = this.urlDevices + id + '/'
    return this.http.delete<any>(urlTemp).pipe(
      tap((res) => {
        console.log('Device: ', res)
      })
    )
  }

  filter(field: string): Observable<Device[]> {
    let urlTemp = this.urlDevices + '?' + field
    return this.http.get<Device[]>(urlTemp).pipe(
      tap((res) => {
        this.devicesFiltered = res
        console.log('Devices filtered: ', this.devicesFiltered)
      })
    )
  }

  getCSV(): Observable<any> {
    let urlTemp = this.urlDevices + 'malas/'
    return this.http.get<any>(urlTemp).pipe(
      tap((res) => {
        console.log(res)
      }) 
    )
  }

  getValue(): Observable<any> {
    return this.http.get<any>(this.urlDeviceValues).pipe(
      tap((res) => {
        this.deviceValues = res
        console.log('Values: ', this.deviceValues)
      })
    )
  }

}
