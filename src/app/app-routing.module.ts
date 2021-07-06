import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopheadingComponent} from './topheading/topheading.component'
import {TechnewsComponent} from './technews/technews.component'
import {BusinessComponent} from './business/business.component'
import {SportsComponent} from './sports/sports.component'
import {EntertainmentNewsComponent} from './entertainment-news/entertainment-news.component'
const routes: Routes = [
  {
path:'',
component:TopheadingComponent
},
{
  path:'Tech',
  component:TechnewsComponent
},
{
  path:'Business',
  component:BusinessComponent
},
{
  path:'Sports',
  component:SportsComponent
},
{
  path:'Entertainment',
  component:EntertainmentNewsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
