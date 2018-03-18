import { Component, OnInit,Input } from '@angular/core';
import {MovieService}     from '../../../services/movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movieDisplay = []; 
  @Input() normalFlag:boolean;
  
  constructor(private movieService:MovieService) {
    //this.newsDisplay=this.newsService.getNewsList();
    
   }
  ngOnInit() { 
  }

}
