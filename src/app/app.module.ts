import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailesComponent } from './detailes/detailes.component';
import { TvComponent } from './tv/tv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeelessPipe } from './seeless.pipe';
import { SeemorePipe } from './seemore.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    NavbarComponent,
    PeopleComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    DetailesComponent,
    TvComponent,
    SeelessPipe,
    SeemorePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
