import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Boat }           from './boat';

@Injectable()
export class BoatSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Boat[]> {
    return this.http
               .get(`app/Boates/?name=${term}`)
               .map(response => response.json().data as Boat[]);
  }
}