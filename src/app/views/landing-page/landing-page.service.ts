import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GoogleApiResponse } from 'src/environments/responses';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class LandingPageService {
  private _books!: BehaviorSubject<Book[]>;
  private _apiUrl?: string
  private _apiKey?: string
  private _bookSearch?: string
  constructor( private http : HttpClient) {
    this._books = new BehaviorSubject<Book[]>([])
    this.instantiateVariables()
  }

  private instantiateVariables(){
    this._apiUrl = environment.apiUrl; 
    this._apiKey = environment.googleApiKey
    this._bookSearch = ""
  }

  public setBookSearch(bookSearch: string){
    this._bookSearch = bookSearch
    setTimeout(()=>{
      this.fetchBooks(this._bookSearch, 0).subscribe()
    }, 500)
  }

  public getBooks() : Observable<Book[]> {
    return this._books.asObservable();
  }

  public setBooks(books: Book[]){
    this._books.next(books)
  }

  public fetchBooks(bookData: string = "a", page: number = 0) : Observable<void>{
    this._bookSearch == "" ? this._bookSearch = bookData : null
    let query = `${this._apiUrl}books/v1/volumes?q=${this._bookSearch}&startIndex=${page.toString()}&maxResults=20&key=${this._apiKey}`
    return this.http.get<GoogleApiResponse>(
      query,{}
    ).pipe(
      map(resp=>{
        this.filterOnlyValidBooks(resp.items)
    }));      
  }

  filterOnlyValidBooks(books: Book[]){
    let temporalBookArray:  Book[] = []
    books.forEach((book)=>{
      if(book.volumeInfo.imageLinks != undefined && book.volumeInfo.authors != undefined){
        temporalBookArray.push(book)
        temporalBookArray = temporalBookArray.filter((a, i) => temporalBookArray.findIndex((s) => a.id === s.id) === i)
      }
    })
    this._books.next(temporalBookArray)
  }
}
