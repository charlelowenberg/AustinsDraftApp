import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../Models/player.model';
import { Observable, of } from 'rxjs';
import { catchError, groupBy, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',  'Accept': 'application/json', 'Access-Control-Allow-Origin': '*'})
    };

    //url = "https://localhost:44399/api/Players";
    url = "https://footballdraftapi.azurewebsites.net/Api/Players";

    selectedPlayer: Player;
    playerList: Player[];

    constructor(private http: HttpClient,
      private messageService: MessageService) { }

    createPlayer(player: Player): Observable<Player> {
      console.log("FirstName3 : " + player.FirstName);
      return this.http.post<Player>(this.url + '/Player/', player);
  }

  public getPlayers(): Observable<Player[]>{
    return this.http.get<Player[]>(this.url)
    .pipe(
      tap(_ => this.log('fetched player')),
      catchError(this.handleError<Player[]>('getPlayers', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`PlayerService: ${message}`);
  }


  deletePlayer(player: Player | number): Observable<Player> {
    const id = typeof player === 'number' ? player : player.PlayerID;
    const url = `${this.url}/${id}`;

    return this.http.delete<Player>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted player id=${id}`)),
      catchError(this.handleError<Player>('deletePlayer'))
    );
  }

  public getPlayerByID(id: number): Observable<Player>{

    const url = `${this.url}/${id}`;
    console.log("what is the url : " + url);
    return this.http.get<Player>(url).pipe(
      tap(_ => this.log(`fetched player id=${id}`)),
      catchError(this.handleError<Player>(`getPlayerByID id=${id}`))

    );

  }

  public updatePlayer(player: Player): Observable<Player> {
    console.log("updatePlayer = " + player.PlayerID);
    const url = `${this.url}/${player.PlayerID}`;
    console.log("what is the url : " + url);
    return this.http.put(url, player).pipe(
      tap(_ => this.log(`updated hero id=${player.PlayerID}`)),
      catchError(this.handleError<any>('updatePlayersafsf4444'))
    );

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

}





