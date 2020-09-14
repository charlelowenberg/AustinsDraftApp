import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Team } from '../Models/team.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';




@Injectable({
  providedIn: 'root'
})
export class TeamService {


  // headers = new HttpHeaders();
  // headers.append({'Accept': 'application/json'});
  // headers.append('Content-Type', 'application/json');
  // headers.append('Access-Control-Allow-Origin', '*');

  selectedTeam: Team;
  teamList: Team[];
  //url = "https://localhost:44399/api/Teams";
  url = "https://footballdraftapi.azurewebsites.net/Api/Teams";


  httpOptions = {
    //headers: new HttpHeaders({ 'Content-Type': 'application/json',  'Accept': 'application/json', 'Access-Control-Allow-Origin': '*'})
    headers: new HttpHeaders({ 'Content-Type': 'application/json',  'Accept': 'application/json'})
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) {

   }



   createTeam(teams: Team): Observable<Team> {
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',  'Accept': 'application/json', 'Access-Control-Allow-Origin': '*'}) };
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',  'Accept': 'application/json', 'Access-Control-Allow-Origin': '*'}) };
    return this.http.post<Team>(this.url + '/Teams/',
    teams, httpOptions);
  }

  public getTeams(): Observable<Team[]>{
    return this.http.get<Team[]>(this.url)
    .pipe(
      tap(_ => this.log('fetched teams')),
      catchError(this.handleError<Team[]>('getTeams', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`TeamService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  deleteTeam(team: Team | number): Observable<Team> {
    const id = typeof team === 'number' ? team : team.TeamID;
    const url = `${this.url}/${id}`;

    return this.http.delete<Team>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Team>('deleteTeam'))
    );
  }
}



