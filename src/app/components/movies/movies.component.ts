import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movieList =[];
  public normalFlag:boolean;
  constructor() { }

  ngOnInit() {
  }

    // Update news list based on search input
    setNewsList(event) {
      this.movieList = event.newsList;
      this.normalFlag=event.normalFlag;
      alert(this.movieList[0].Title);
    }
}
