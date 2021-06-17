import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
//import { MdButtonModule, MdCardModule, MdToolbarModule } from '@angular/material';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JobsComponent } from './jobs/jobs.component';
import { ClientsComponent } from './clients/clients.component';
import { EmployersComponent } from './employers/employers.component';
import { ContactComponent } from './contact/contact.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    JobsComponent,
    ClientsComponent,
    EmployersComponent,
    ContactComponent,
    UserprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    //BrowserAnimationsModule,
    //MdToolbarModule,
    //MdButtonModule,
    //MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
