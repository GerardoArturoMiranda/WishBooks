/*
* Arturo Miranda, August 14th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
// 3rd Application Developers Imports
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// Personal Imports
import { Book } from 'src/app/models/Book';
@Injectable({
  providedIn: 'root'
})
export class BookDetailService {
  // Variable for saving the url of the google api endpoint
  private _apiUrl?: string

  constructor( private http : HttpClient) {
    this.instantiateVariables()
  }

  private instantiateVariables(){
    /*
    * instantiateVarible .- Method for instantiating data, this method is called in the constructor
    *                               or in the ngOnInit methods, this is for minimizing the error of having 
    *                               null exceptions or data as undefined. Mostly the variables should be 
    *                               ready in the constructor
    */
    this._apiUrl = environment.apiUrl; 
  }

  fetchBook(bookId: string = "") : Observable<Book>{
    /*
    * fetchBooks .- Method for fetching a book, the query is below, it will
    *                     only append the id of the book.
    */
    let query = `${this._apiUrl}books/v1/volumes/${bookId}`
    return this.http.get<Book>(
      query,{}
    ).pipe(
      map(resp=>{
      return resp
    }));      
  }

}