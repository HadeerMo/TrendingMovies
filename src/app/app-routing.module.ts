import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailesComponent } from './detailes/detailes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"detailes",canActivate:[AuthGuard],component:DetailesComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"movies",canActivate:[AuthGuard],component:MoviesComponent},
  {path:"tv",canActivate:[AuthGuard],component:TvComponent},
  {path:"people",canActivate:[AuthGuard],component:PeopleComponent},
  {path:"networks",canActivate:[AuthGuard],component:PeopleComponent},
  {path:"**",canActivate:[AuthGuard],component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
