import { Component, OnInit } from '@angular/core';

import { Router }            from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  continent: string;
  state: string;
  search = {
    guests: 3,
    days:1,
    state: "",
    country: '',
    city: '',
    
  }
  days = [ 0,1, 2,3,4,5,6,7,14,21,30];
  powers = [ 1, 2,3,4,5,6,7,8,9,10,11];
  constructor(
    private router: Router) { }

  datePicked(destination:string){
    let temp = destination.split(',');
    let temp2 = [];
    temp2.push(temp[2]);
    temp2.push(temp[1]);
    temp2.push( temp[0]);  
    this.search.country = temp2[0];
    this.search.state = temp2[1];
    this.search.city = temp2[2];
  }
  ngOnInit() {
  }
  onSubmit():void {
    this.router.navigate(['/en/search'],{queryParams: this.search});
    console.log(this.search);
  }

}
