import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { EmployersComponent } from './employers/employers.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
//import { CommonModule } from '@angular/common';
//import { Routes,RouterModule } from '@angular/router';

//const routes:Routes=[];
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'jobs',component:JobsComponent},
  {path:'clients',component:ClientsComponent},
  {path:'employers',component:EmployersComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







