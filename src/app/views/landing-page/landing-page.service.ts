/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
// 3rd Application Developers Imports
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Personal Imports
import { Book } from 'src/app/models/Book';
import { environment } from 'src/environments/environment';
import { GoogleApiResponse } from 'src/environments/responses'
@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  // Variables for making the petitions to the API, we are getting
  // the apiKey however is local and doesn't have getter and setter
  private _apiKey?: string
  private _apiUrl?: string
  // Subject variable, container is subscribed to changes in this variable
  private _books!: BehaviorSubject<Book[]>;
  private _bookSearch?: string
  constructor( private http : HttpClient) {
    this._books = new BehaviorSubject<Book[]>([])
    this.instantiateVariables()
  }

  private instantiateVariables(){
    /*
    * instantiateVarible .- Method for instantiating data, this method is called in the constructor
    *                               or in the ngOnInit methods, this is for minimizing the error of having 
    *                               null exceptions or data as undefined. Mostly the variables should be 
    *                               ready in the constructor
    */
    this._apiKey = environment.googleApiKey
    this._apiUrl = environment.apiUrl; 
    this._bookSearch = ""
  }

  public setBookSearch(bookSearch: string){
    /*
    * setBookSearch .- Setter of bookSearch variable, it will set the varible and
    *                           fetch again the books.
    */
    this._bookSearch = bookSearch
    setTimeout(()=>{
      this.fetchBooks(this._bookSearch, 0).subscribe()
    }, 500)
  }

  public getBooks() : Observable<Book[]> {
    /*
    * getBooks .- Getter of OBSERVABLE type, all components that have this
    *                   this dependency will  be able to subscribe to this variable.
    */
    return this._books.asObservable();
  }

  public setBooks(books: Book[]){
    /*
    * setBooks .- Setter of Books, it will be starting to emit the variable changes in books.
    */
    this._books.next(books)
  }

  public fetchBooks(bookData: string = "a", page: number = 0) : Observable<void>{
    /*
    * fetchBooks .- Method for fetching a group of books, the query specifications are in the documentation of the API
    *                     which can be found in the Documentation of the project, setting default values to avoid
    *                     bad petitions  
    */
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
    /*
    * filterOnlyValidBooks .- Method for filtering and displaying only the books with images and with authors, these
    *                                   attriibutes I found them to be the most relevant, after filtering books will emit to subscribed
    *                                   components.
    */
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
