import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { Boat } from '../boat';
import { BoatService } from '../boat.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  boats: Boat[];

  constructor(
    private route: ActivatedRoute,
    private boatService: BoatService
  
  ) { }

  getBoats(): void {
    
    this.route.queryParams
      .switchMap((params: Params) => this.boatService.search(params['city']?params['city']:"",params['name']?params['name']:""))
      .subscribe(boats => this.boats = boats);
  }

  ngOnInit(): void {
    this.getBoats();
  }

}
