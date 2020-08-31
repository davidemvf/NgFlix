import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Film } from '../models/film.model';



@Injectable({providedIn: "root"})
export class ContentService {

    constructor( private http: HttpClient) {

    }
    
   
    getFilms(): Observable<Film[]> {
        
        const newLocal: string = "https://api.themoviedb.org/3/discover/movie";
        
        return this.http
            .get(newLocal, {
                params : {
                    api_key: 'd063f38fe3e1f45729834c95133aff40',
                    language: 'it-IT'
                }
            })
            .pipe(
                map(res => {
                    // console.log(res);
                    let filmsArray: Film[];
                    filmsArray = res['results'];
                    // console.log(filmsArray);
                    
                    return filmsArray;
                })
            )
    }

    getTrendingContent(): Observable<Film[]> {
        const newLocal: string = 'https://api.themoviedb.org/3/trending/all/week?api_key=d063f38fe3e1f45729834c95133aff40';

        return this.http
            .get(newLocal)
            .pipe(
                map(res => {
                    console.log(res);
                    
                    let trendContent: Film[];
                    trendContent = res['results'];
                    console.log(trendContent);
                    
                    return trendContent;
                })
            )
    }

    getComedies(): Observable<Film[]> {
        const newLocal: string = 'https://api.themoviedb.org/3/discover/movie?api_key=d063f38fe3e1f45729834c95133aff40&language=it-IT';

        return this.http
            .get(newLocal)
            .pipe(
                map(res => {
                    console.log(res);
                    console.log(res['results']);
                    const results = res['results'];
                    const comedies: Film[] = [];
                    results.forEach(element => {
                        if (element['genre_ids'].includes(28)) {
                            comedies.push(element);
                        }
                    // console.log(comedies);
                    });
                    return comedies;
                })
            )
    }
    

    getWorsts(): Observable<Film[]> {
        const newLocal: string = 'https://api.themoviedb.org/3/discover/movie?api_key=d063f38fe3e1f45729834c95133aff40&certification_country=US&certification.lte=G&sort_by=popularity.asc';

        return this.http
            .get(newLocal)
            .pipe(
                map(res => {
                    console.log('results: ' + res['results']);
                    let worsts: Film[] = [];
                    worsts = res['results'];

                    return worsts;
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