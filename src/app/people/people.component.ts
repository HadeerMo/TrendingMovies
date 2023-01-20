import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
  trendingPeople:any[]=[];
  baseURL:string='https://image.tmdb.org/t/p/w500'
  ngOnInit(): void {
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
        this.trendingPeople = response.results
      }
    })
  }

}
