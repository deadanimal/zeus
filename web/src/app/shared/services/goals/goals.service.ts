import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Goal } from './goals.model';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  // URL
  public urlGoals: string = environment.baseUrl + 'v1/goals/'

  // Data
  public goal: Goal
  public goals: Goal[] = []
  public goalsFiltered: Goal[] = []

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Goal> {
    return this.http.post<any>(this.urlGoals, body).pipe(
      tap((res) => {
        console.log('Goal: ', res)
      })
    )
  }

  get(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.urlGoals).pipe(
      tap((res: Goal[]) => {
        this.goals = res
        console.log('Goals: ', this.goals)
      })
    )
  }

  getOne(id: string): Observable<Goal> {
    let urlTemp = this.urlGoals + id + '/'
    return this.http.get<Goal>(urlTemp).pipe(
      tap((res: Goal) => {
        this.goal = res
        console.log('Goal: ', this.goal)
      })
    )
  }

  update(id: string, body: Form): Observable<Goal> {
    let urlTemp = this.urlGoals + id + '/'
    return this.http.patch<Goal>(urlTemp, body).pipe(
      tap((res) => {
        this.goal = res
        console.log('Goal: ', this.goal)
      })
    )
  }

  delete(id: string): Observable<any> {
    let urlTemp = this.urlGoals + id + '/'
    return this.http.delete<any>(urlTemp).pipe(
      tap((res) => {
        console.log('Goal: ', res)
      })
    )
  }

  filter(field: string): Observable<Goal[]> {
    let urlTemp = this.urlGoals + '?' + field
    return this.http.get<Goal[]>(urlTemp).pipe(
      tap((res) => {
        this.goalsFiltered = res
        console.log('Goals filtered: ', this.goalsFiltered)
      })
    )
  }

}
