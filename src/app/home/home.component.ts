import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content-services/content.service';

import { Film } from '../models/film.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  contentTypes: string[] = ["I più popolari su Netflix",
                            "I titoli del momento",
                            "Commedie",
                            "Da guardare con i ragazzi"
                           ];
  
  films: Film[];

  constructor(private contentServices: ContentService) { }

  ngOnInit(): void {
    this.contentServices.logToConsole();
    this.fetchFilms();
  }

  fetchFilms(): void {
      this.contentServices.getFilms().subscribe(filmsArray => {
        this.films = filmsArray;
      })
        
  }

  getPath(path): string {
    
    return this.contentServices.mergePath(path);

  }

}
