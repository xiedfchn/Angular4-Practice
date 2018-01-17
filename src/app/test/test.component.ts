import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Boat } from '../boat';
import { BoatService } from '../boat.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  boats: Boat[];
  selectedBoat: Boat;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private boatService: BoatService) { }

  getBoats(): void {
    
    this.route.queryParams
      .switchMap((params: Params) => this.boatService.search(params['continent']?params['continent']:"",params['name']?params['name']:""))
      .subscribe(boats => this.boats = boats);
  }

  ngOnInit(): void {
    this.getBoats();
  }

  onSelect(boat: Boat): void {
    this.selectedBoat = boat;
    this.gotoDetail();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedBoat.id]);
  }
}
