import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Response, Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import "rxjs/Rx";
@Injectable()
export class GetDataFromApiService {
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor( private http: Http, ) {   this.myMethod$ = this.myMethodSubject.asObservable(); }

  getData(pageNumber) {
    return fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?page="+pageNumber+"&r=json&s=all", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "LI2XXJMktGmshm8fgxxIkg01ogFjp1emtWhjsnaEwrXw2jYdrZ"
      }
    });
    }

    getMovieDataByYear(year) {
      return fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=all&y="+year, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
          "x-rapidapi-key": "LI2XXJMktGmshm8fgxxIkg01ogFjp1emtWhjsnaEwrXw2jYdrZ"
        }
      });
  
      }

      getDataFromTMDB(page: number) {
        return fetch("https://api.themoviedb.org/3/discover/movie?api_key=6abdf9da1cf92c44b3fb376daaf55867&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page);
        }
      getSingleMovieDetail(movieId: number) {
        return fetch("https://api.themoviedb.org/3/movie/"+movieId+"?api_key=6abdf9da1cf92c44b3fb376daaf55867&language=en-US");
      }
      // getMostPopularMovies(week:) {
      //   return fetch("https://api.themoviedb.org/3/movie/week?api_key=6abdf9da1cf92c44b3fb376daaf55867&language=en-US");
      // }
      getMostPopularMovies(startDate, endDate, pageNo): Observable<any> {
        return this.http.get(
          'https://api.themoviedb.org/3/discover/movie?api_key=6abdf9da1cf92c44b3fb376daaf55867&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNo+'&primary_release_date.gte='+startDate+'&primary_release_date.lte='+endDate).map((response: Response) => {
            return response.json();
        })
        
      }
        myMethod(data) {
          
          this.myMethodSubject.next(data);
      }

  }


