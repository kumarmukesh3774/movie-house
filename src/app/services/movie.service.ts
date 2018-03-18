
import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {MOVIEAPI} from '../configs/api.config';
import {App}  from '../configs/app.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  public movieList:any=[];
  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});
  searchHandler(apiUrl){
    alert(apiUrl);
      this.movieList= this.http.get(apiUrl)
       .map(data => data.json(),
     (error: any)=>this.handleError(error));
     return this.movieList;
     }
     private handleError(error: Response){
       return Observable.throw(error.statusText);
    
  }
  getNewsList(){
      return this.movieList;

  }


  addToFav(movie) {
    //alert(singleNews.title);
     return this.http.post(App.apiUrl1+"Search", movie, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>this.handleError(error)); 
  }

  getFavNews() {
    return this.http.get(App.apiUrl1+"movieList")
    .map(data => data.json(),
    (err) => {
      console.log("error encountered");
    });
  }

  deleteFavNews(movie){
    return this.http.delete(App.apiUrl1+"Search/"+movie.id, {headers: this.headers});
} 


}


  
