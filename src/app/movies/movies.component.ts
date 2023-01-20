import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
  trendingMovies:any[]=[];
  baseURL:string='https://image.tmdb.org/t/p/w500'
  ngOnInit(): void {
    this._MoviesService.getTranding('movie').subscribe({
      next:(response)=> this.trendingMovies = response.results
    })
  }

}






