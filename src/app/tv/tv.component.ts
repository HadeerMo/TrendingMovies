import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
  trendingTv:any[]=[];
  baseURL:string='https://image.tmdb.org/t/p/w500'
  ngOnInit(): void {
    this._MoviesService.getTranding('tv').subscribe({
      next:(response)=> this.trendingTv = response.results
    })
  }

}
