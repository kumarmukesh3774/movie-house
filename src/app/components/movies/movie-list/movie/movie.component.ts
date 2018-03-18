


import { Component, OnInit,Input } from '@angular/core';
import { MovieService } from '../../../../services/movie.service';
import {HeaderComponent} from '../../../shared/header/header.component';
import { NgIf } from '@angular/common';
//import {CommonService} from '../../../../shared/services/common.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']/* ,
  providers: [CommonService] */
})

export class MovieComponent implements OnInit { 
   @Input() movie: any;
  @Input() normalFlag:boolean;

  
  public headerComponent:HeaderComponent;



  constructor(private movieService: MovieService,private commonService: MovieService) {
    //calling header Component from news Component
   // this.commonService.callFavourites(); 
   }

  ngOnInit() {
  }

  // Add favourite news
  addToFav(movie) {
   
 	this.movieService.addToFav(movie).subscribe((res) =>{
    alert("Added to Favourites");
      
  	}, (error) =>{
      alert("Error in  Adding Favourites");
        
  	}) 
  }
  deleteFavNews(movie){
    this.movieService.deleteFavNews(movie).subscribe((res) =>{
      alert("Removed from Favourites");  
     
  	}, (error) =>{
      alert("Error in  Removing Favourites");
        
  	}) } 
}
