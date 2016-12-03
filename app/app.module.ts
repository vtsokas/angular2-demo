// Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { Angular2DataTableModule } from 'angular2-data-table';
import { ChartsModule } from 'ng2-charts';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

// Components
import { AppComponent }  from './app.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { GridComponent } from './components/grid-demo/grid.component';
import { ChartComponent } from './components/chart-demo/chart.component';
import {HeroFormComponent} from "./components/hero-form/hero-form.component";

//Services
import { HeroService } from './services/hero.service';
import { ChartDataService } from "./services/chart.data.service";

import './rxjs-extensions';
import {HeroNameUniqueValidator} from "./directives/hero-name-unique.validator";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    Angular2DataTableModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    GridComponent,
    ChartComponent,
    HeroFormComponent,
    HeroNameUniqueValidator
  ],
  providers: [
    HeroService,
    ChartDataService,
    HeroNameUniqueValidator
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
