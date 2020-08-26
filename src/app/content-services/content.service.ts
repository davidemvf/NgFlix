import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Film } from '../models/film.model';
import { Observable } from 'rxjs';


@Injectable({providedIn: "root"})
export class ContentService {

    constructor( private http: HttpClient) {

    }
    
    logToConsole(): void {
        console.log("ciao");
        
    }

   
    getFilms(): Observable<Film[]> {
        const newLocal: string = "https://api.themoviedb.org/3/discover/movie?api_key=d063f38fe3e1f45729834c95133aff40&language=it-IT";
        return this.http
            .get(newLocal)
            .pipe(
                map(res => {
                    console.log(res);
                    let filmsArray: Film[];
                    filmsArray = res['results'];
                    console.log(filmsArray);
                    
                    return filmsArray;
                })
            )
    }

    mergePath(path): string {
        let pathMerged: string;
        if (path) {
        pathMerged = `https://image.tmdb.org/t/p/w185${path}`;
        } else {
        pathMerged = ""
        }

        return(pathMerged);
    }
   
    
}