import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from 'src/app/components/login/login.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ASideComponent } from './components/a-side/a-side.component';
import { HomeComponent } from './components/home/home.component';
import { OfficialVacationsComponent } from './components/official-vacations/official-vacations.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,LoginComponent, NotFoundComponent, RegisterComponent, GeneralSettingsComponent, NavbarComponent, ASideComponent, HomeComponent, OfficialVacationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,MatTableModule, MatPaginatorModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
