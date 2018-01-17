import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-destination-picker',
  templateUrl: './destination-picker.component.html',
  styleUrls: ['./destination-picker.component.css']
})
export class DestinationPickerComponent implements OnInit {
  private slectedCountry: any;
  private slectedState: any;
  private slectedCity: any;


  private destination: String = "";
  private currentScreen: String;

  private countries: any[] = [
    {
      country: "Italy",
      states: [
        {
          state: 'Sardinia',
          cities: ["Cagliari"]
        },

        {
          state: 'Sicily',
          cities: ["Siena", "Tonnarella"]
        }
      ]
    },
    {
      country: "Germany",
      states: [
        {
          state: 'Brandenburg',
          cities: ["Zehdenick"]
        }
      ]
    },
    {
      country: "Spain",
      states: []
    },
    {
      country: "China",
      states: []
    },
    {
      country: "Indian",
      states: []
    },
    {
      country: "Japan",
      states: []
    },
    {
      country: "Russia",
      states: []
    },
    {
      country: "Korea",
      states: []
    }
  ]
  constructor() {
  }

  ngOnInit() {
  }

  private onSelectCountry(country: any): void {
    this.destination = "";
    this.destination = country.country + this.destination;
    this.slectedCountry = country;
    this.currentScreen = "state"
  }

  private onSelectState(state: any): void {
    this.destination = state.state + "," + this.destination;
    this.slectedState = state;
    this.currentScreen = "city"
  }

  private onSelectCity(city: any): void {
    this.destination = city + "," + this.destination;
    this.slectedCity = city;
    this.close();
  }

  private open(): void {
    this.currentScreen = "country";
  }
  @Output() datePicked = new EventEmitter<String>();
  private close(): void {
    this.datePicked.emit(this.destination)
    this.currentScreen = "";
  }
}
