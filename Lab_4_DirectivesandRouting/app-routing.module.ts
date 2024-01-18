import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectivesComponent } from './directives/directives.component';
import { DatabindingComponent } from './databinding/databinding.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'data-binding', component:DatabindingComponent},
  {path:'directives', component: DirectivesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
