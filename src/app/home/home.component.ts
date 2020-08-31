import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content-services/content.service';

import { Film } from '../models/film.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  films: Film[];
  trendContent: Film[];
  comedies: Film[];
  worsts: Film[];
  pathForCarousel: string[] = [];

  constructor(private contentServices: ContentService) {
    
   }

  ngOnInit(): void {
    this.fetchFilms();
    this.fetchTrendContent();
    this.fetchComedies();
    this.fetchWorsts();
  }

  fetchFilms(): void {
      this.contentServices.getFilms().subscribe(filmsArray => {
          this.films = filmsArray;
          // console.log(this.films);
          this.getImageCarousel();
      });
  }

  fetchTrendContent(): void {
    this.contentServices.getTrendingContent().subscribe(trendContent => {
      this.trendContent = trendContent;
      // console.log(trendContent);
      // console.log(this.trendContent);
    })
  }

  fetchComedies(): void {
    this.contentServices.getComedies().subscribe(comedies => {
      this.comedies = comedies;
      // console.log(comedies);
      // console.log(this.comedies);
    })
  }

  fetchWorsts(): void {
    this.contentServices.getWorsts().subscribe(worsts => {
      this.worsts = worsts;
      // console.log(this.worsts);
      
      
    })

  }

  getPath(path: string): string {
    return this.contentServices.mergePath(path);
  }

  getImageCarousel(): void {
  
    let paths: string[];
    for (var i = 0; i < 4; i++) {
      let path: string = this.getPath(this.films[i].backdrop_path);
      this.pathForCarousel.push(path);
      console.log(this.pathForCarousel);
      
    }
  }

}
