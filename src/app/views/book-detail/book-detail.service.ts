import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GoogleApiResponse } from 'src/environments/responses';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookDetailService {
  private _book!: Book
  private _apiUrl?: string

  constructor( private http : HttpClient) {
    this.instantiateVariables()
  }

  private instantiateVariables(){
    this._book = new Book
    this._apiUrl = environment.apiUrl; 
  }

  public getBook() : Book{
    return { ...this._book}
  }

  public setBook(book: Book){
    this._book = book
  }

  fetchBook(bookId: string = "") : Observable<Book>{
    let query = `${this._apiUrl}books/v1/volumes/${bookId}`
    return this.http.get<Book>(
      query,{}
    ).pipe(
      map(resp=>{
      return resp
    }));      
  }

}