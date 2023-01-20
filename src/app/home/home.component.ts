import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
  // baseURL+person.profile_path
  trendingMovies:any[]=[];
  trendingTv:any[]=[];
  trendingPeople:any[]=[];
  baseURL:string='https://image.tmdb.org/t/p/w500'
  ngOnInit(): void {
    this._MoviesService.getTranding('movie').subscribe({
      next:(response)=> this.trendingMovies = response.results.slice(0,10)
    })
    this._MoviesService.getTranding('tv').subscribe({
      next:(response)=> this.trendingTv = response.results.slice(0,10)
    })
    this._MoviesService.getTranding('person').subscribe({
      next:(response)=>{
        for (let i = 0; i < response.results.length; i++) {
          if(response.results[i].profile_path==null){
            response.results[i].profile_path='../../assets/avatar-3637561_1280.webp'
          }
          else{
            response.results[i].profile_path=this.baseURL+response.results[i].profile_path
          }
        }
        this.trendingPeople = response.results.slice(0,10)
      }
    })

  }

}
