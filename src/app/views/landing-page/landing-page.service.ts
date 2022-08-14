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

export class LandingPageService {
  private _books?: Book[]
  private _apiUrl?: string
  private _apiKey?: string

  constructor( private http : HttpClient) {
    this.instantiateVariables()
  }

  private instantiateVariables(){
    this._books = []
    this._apiUrl = environment.apiUrl; 
    this._apiKey = environment.googleApiKey
  }

  public getBooks() : Book[]{
    return [...this._books!]
  }

  public setBooks(books: Book[]){
    this._books = books
  }

  public fetchBooks(bookData: string = "a") : Observable<Book[]>{
    let query = `${this._apiUrl}books/v1/volumes?q=${bookData}&key=${this._apiKey}`
    return this.http.get<GoogleApiResponse>(
      query,{}
    ).pipe(
      map(resp=>{
        console.log(resp)
      return resp.items;
    }));      
  }
}
