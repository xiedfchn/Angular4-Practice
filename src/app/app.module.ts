import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes  } from '@angular/router'

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FavouriteBoatsComponent } from './favourite-boats/favourite-boats.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TestComponent } from './test/test.component';
import { DestinationPickerComponent } from './destination-picker/destination-picker.component';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { BoatService }          from './boat.service';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';



const appRoutes: Routes = [
  
  { path: '',   redirectTo: 'en', pathMatch: 'full' },
  {
      path: 'en',
      component: IndexComponent
    },
    {
      path: 'en/list-your-boat',
      component: FavouriteBoatsComponent
  },
  {
      path: 'test/:id',
      component: TestComponent
  },
  {
      path: 'en/search',
      component: SearchComponent
  },
  { path: 'detail/:id', component: DetailComponent },
  {
      path: 'haha',
      component: ParentComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FavouriteBoatsComponent,
    TopHeaderComponent,
    HeaderComponent,
    FooterComponent,
    FooterBottomComponent,
    SearchBarComponent,
    CalendarComponent,
    TestComponent,
    DestinationPickerComponent,
    DetailComponent,
    SearchComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [BoatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
