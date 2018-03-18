//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MovieService}         from '../../../services/movie.service';
//import {CommonService}         from '../../services/common.service';

import {MOVIEAPI}    from '../../../configs/api.config'
import {App}        from '../../../configs/app.config';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[MovieService/* ,CommonService */]
})
export class HeaderComponent implements OnInit {

  searchInput:string="";
  //to handle buttons in favourite list
  public normalFlag:boolean;
 // commonService:CommonService;
  private headers = new Headers({ 'Content-Type': 'application/json'});
   public movieList=[];
   @Output() successEmitter = new EventEmitter<any>();
   constructor(private movieService : MovieService/* ,commonService:CommonService */) { 
/*     this.commonService.invokeEvent.subscribe(flag => {
      if(flag == true){
       this.favourites(); 
     }
    }); */ 

   }
//technical news handler
   tech(){
    this.normalFlag=true;
    this.apiServiceCaller(MOVIEAPI.techUrl);
   }
   //sports news handler
   sports(){
    this.normalFlag=true;
    this.apiServiceCaller(MOVIEAPI.sportsUrl);
   }
   //business news handler
   business(){
    this.normalFlag=true;
    this.apiServiceCaller(MOVIEAPI.buisinessUrl);
   }
   //favourite news handler
   public favourites(){
    this.normalFlag=false;
     //console.log("calledd");
     
    this.apiServiceCaller(App.apiUrl1+"db");
   }
   //top world news handler
   homePage(){
    this.normalFlag=true;
    this.apiServiceCaller(MOVIEAPI.worldNewsUrl);
   }
   //search news handler
   searchHandler(){
     //to handle buttons in favourite list
    this.normalFlag=true;
    this.apiServiceCaller(MOVIEAPI.searchUrlPart1+this.searchInput+MOVIEAPI.searchUrlPart2);
   } 

   apiServiceCaller(apiUrl){
    this.movieService.searchHandler(apiUrl).subscribe((res) =>{
      this.movieList = res.Search;
      console.log(this.movieList[0].Title);
      //alert(this.newsList);
      this.successEmitter.emit({
        'movieList': this.movieList,
        'normalFlag':this.normalFlag
      });
      }, (error) =>{
        console.log("Error Encoutered in fetching responseFrom API");
      })

   }
 

  ngOnInit() {
    //first time loading homepage
    this.homePage();
  }

}
