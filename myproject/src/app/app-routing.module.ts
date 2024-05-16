import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { FoodComponent } from './food/food.component';
import { ContactComponent } from './contact/contact.component';

 // Adjust the path if necessary


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'food', component: FoodComponent },
  { path: 'contact', component: ContactComponent } 

  // Agar koi anjaan route milta hai to home page pe redirect karein
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }