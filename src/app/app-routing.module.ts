import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { OfficialVacationsComponent } from './components/official-vacations/official-vacations.component';

const routes: Routes = [
 
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register/:id',component:RegisterComponent},
  {path:'generalSettings', component:GeneralSettingsComponent}, 
  {path:'officialVacations',component:OfficialVacationsComponent},
  {path:'**', component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
