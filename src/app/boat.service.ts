
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Boat } from './boat';
@Injectable()
export class BoatService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/boats';  // URL to web api

  getBoats(): Promise<Boat[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Boat[])
               .catch(this.handleError);
  }

  search(city: string,name: string): Promise<Boat[]> {
    console.log(name);
    
    return this.http
               .get(`app/boats/?city=${city}&name=${name}`)
               .toPromise()
               .then(response => response.json().data as Boat[])
               .catch(this.handleError);;
  }
  getBoat(id: number): Promise<Boat> {
    return this.getBoats()
               .then(boats => boats.find(boat => boat.id === id));
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  constructor(private http: Http) { }

}
