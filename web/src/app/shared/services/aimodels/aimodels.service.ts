import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Aimodel } from './aimodels.model';

@Injectable({
  providedIn: 'root'
})
export class AimodelsService {

  // URL
  public urlAimodels: string = environment.baseUrl + 'v1/aimodels/'

  // Data
  public aimodel: Aimodel
  public aimodels: Aimodel[] = []
  public aimodelsFiltered: Aimodel[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Aimodel> {
    return this.http.post<any>(this.urlAimodels, body).pipe(
      tap((res) => {
        console.log('Aimodel: ', res)
      })
    )
  }

  get(): Observable<Aimodel[]> {
    return this.http.get<Aimodel[]>(this.urlAimodels).pipe(
      tap((res: Aimodel[]) => {
        this.aimodels = res
        console.log('Aimodels: ', this.aimodels)
      })
    )
  }

  getOne(id: string): Observable<Aimodel> {
    let urlTemp = this.urlAimodels + id + '/'
    return this.http.get<Aimodel>(urlTemp).pipe(
      tap((res: Aimodel) => {
        this.aimodel = res
        console.log('Aimodel: ', this.aimodel)
      })
    )
  }

  update(id: string, body: Form): Observable<Aimodel> {
    let urlTemp = this.urlAimodels + id + '/'
    return this.http.patch<Aimodel>(this.urlAimodels, body).pipe(
      tap((res) => {
        console.log('Aimodel: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlAimodels + id + '/').pipe(
      tap((res) => {
        console.log('Aimodel: ', res)
      })
    )
  }

  filter(field: string): Observable<Aimodel[]> {
    let urlTemp = this.urlAimodels + '?' + field
    return this.http.get<Aimodel[]>(urlTemp).pipe(
      tap((res) => {
        this.aimodelsFiltered = res
        console.log('Aimodels filtered: ', this.aimodelsFiltered)
      })
    )
  }

}
