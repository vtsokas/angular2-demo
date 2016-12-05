import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { GridComponent } from './components/grid-demo/grid.component';
import { HeroFormComponent } from "./components/hero-form/hero-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroFormComponent },
  { path: 'detail',     component: HeroFormComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'grid',       component: GridComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
