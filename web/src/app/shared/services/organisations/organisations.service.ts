import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Organisation } from './organisations.model';

@Injectable({
  providedIn: 'root'
})
export class OrganisationsService {

  // URL
  public urlOrganisations: string = environment.baseUrl + 'v1/organisations/'

  // Data
  public organisation: Organisation
  public organisations: Organisation[] = []
  public organisationsFiltered: Organisation[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Organisation> {
    return this.http.post<any>(this.urlOrganisations, body).pipe(
      tap((res) => {
        console.log('Organisation: ', res)
      })
    )
  }

  get(): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(this.urlOrganisations).pipe(
      tap((res: Organisation[]) => {
        this.organisations = res
        console.log('Organisations: ', this.organisations)

      })
    )
  }

  getOne(id: string): Observable<Organisation> {
    let urlID = this.urlOrganisations + id + '/'
    return this.http.get<Organisation>(urlID).pipe(
      tap((res: Organisation) => {
        this.organisation = res
        console.log('Organisation: ', this.organisation)
      })
    )
  }

  update(id: string, body: Form): Observable<Organisation> {
    let urlTemp = this.urlOrganisations + id + '/'
    return this.http.patch<Organisation>(urlTemp, body).pipe(
      tap((res) => {
        this.organisation = res
        console.log('Organisation: ', this.organisation)
      })
    )
  }

  delete(id: string): Observable<any> {
    let urlTemp = this.urlOrganisations + id + '/'
    return this.http.delete<any>(urlTemp).pipe(
      tap((res) => {
        console.log('Organisation: ', res)
      })
    )
  }

  filter(field: string): Observable<Organisation[]> {
    let urlTemp = this.urlOrganisations + '?' + field
    return this.http.get<Organisation[]>(urlTemp).pipe(
      tap((res) => {
        this.organisationsFiltered = res
        console.log('Organisations filtered: ', this.organisationsFiltered)
      })
    )
  }

}
