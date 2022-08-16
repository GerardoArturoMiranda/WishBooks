/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';
// Personal Imports
import { Book } from '../../models/Book'
import { LandingPageService } from './landing-page.service';


describe('LandingPageService', () => {
  let service: LandingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClientModule},
        {provide: HttpClient},
        {provide: HttpHandler}
      ],
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(LandingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter books into a valid book array', () => {
  /*
  * should filter books into a valid book array [TEST] .- Test for verifying if the filterOnlyValidBooks works, it should filter the first 2 books
  */
    //Initialization
    // Declaring Books
    const book1 : Book = new Book()
    book1.etag = "OI6TXnR4wOY"
    book1.id = "sfZznQEACAAJ"
    book1.kind = "books#volume"
    book1.selfLink = "https://www.googleapis.com/books/v1/volumes/sfZznQEACAAJ"
    book1.volumeInfo.title = "Cartas a Clara"
    book1.volumeInfo.authors = ["Juan Rulfo","Clara Aparicio de Rulfo","Alberto Vital Díaz"]
    const book2: Book =  new Book()
    book2.etag = "DuYSINpgRrU"
    book2.id = "iw-nx_UZvrwC"
    book2.kind = "books#volume"
    book2.selfLink = "https://www.googleapis.com/books/v1/volumes/iw-nx_UZvrwC",
    book2.volumeInfo.title = "Grupo B. Administracion General de la Generalitat Valenciana (rama Juridica). Temario Bloque. Especifico. Volumen Ii"
    book2.volumeInfo.authors = []
    book2.volumeInfo.imageLinks = {
      "smallThumbnail": "http://books.google.com/books/content?id=iw-nx_UZvrwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=iw-nx_UZvrwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
    const book3 :  Book = new Book()
    book3.etag = "6YR1QITpQbM"
    book3.id = "kUyBBwAAQBAJ"
    book3.kind = "books#volume"
    book3.selfLink = "https://www.googleapis.com/books/v1/volumes/kUyBBwAAQBAJ",
    book3.volumeInfo.title = "Test de examen de conducir DGT permiso B - Turismos"
    book3.volumeInfo.authors = ["Adanat Seguridad Vial"]
    book3.volumeInfo.imageLinks = {
      "smallThumbnail": "http://books.google.com/books/content?id=kUyBBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=kUyBBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
    let apiResponseBooks :Book[] = [book1, book2, book3]
    const expectedBooks :Book[] = [book3]
    // Stimulus
    service.filterOnlyValidBooks(apiResponseBooks)
    service.getBooks().subscribe((books) => {
      apiResponseBooks = books;
      // Expected Behavior
      expect(apiResponseBooks.toString()).toBe(expectedBooks.toString());
    })
  });

  it('should filter first book into final array', () => {
  /*
  * should filter first book into final array [TEST] .- Test for verifying if the filterOnlyValidBooks works, it should filter the first book
  */
    //Initialization
    // Declaring Books
    const book1 : Book = new Book()
    book1.etag = "OI6TXnR4wOY"
    book1.id = "sfZznQEACAAJ"
    book1.kind = "books#volume"
    book1.selfLink = "https://www.googleapis.com/books/v1/volumes/sfZznQEACAAJ"
    book1.volumeInfo.title = "Cartas a Clara"
    book1.volumeInfo.authors = ["Juan Rulfo","Clara Aparicio de Rulfo","Alberto Vital Díaz"]
    book1.volumeInfo.imageLinks = {
      "smallThumbnail": "http://books.google.com/books/content?id=iw-nx_UZvrwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=iw-nx_UZvrwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
    const book2: Book =  new Book()
    book2.etag = "DuYSINpgRrU"
    book2.id = "iw-nx_UZvrwC"
    book2.kind = "books#volume"
    book2.selfLink = "https://www.googleapis.com/books/v1/volumes/iw-nx_UZvrwC",
    book2.volumeInfo.title = "Grupo B. Administracion General de la Generalitat Valenciana (rama Juridica). Temario Bloque. Especifico. Volumen Ii"
    book2.volumeInfo.authors = ["José Luís López"]
    book2.volumeInfo.imageLinks = {
      "smallThumbnail": "http://books.google.com/books/content?id=iw-nx_UZvrwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=iw-nx_UZvrwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
    const book3 :  Book = new Book()
    book3.etag = "6YR1QITpQbM"
    book3.id = "kUyBBwAAQBAJ"
    book3.kind = "books#volume"
    book3.selfLink = "https://www.googleapis.com/books/v1/volumes/kUyBBwAAQBAJ",
    book3.volumeInfo.title = "Test de examen de conducir DGT permiso B - Turismos"
    book3.volumeInfo.authors = ["Adanat Seguridad Vial"]
    book3.volumeInfo.imageLinks = {
      "smallThumbnail": "http://books.google.com/books/content?id=kUyBBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=kUyBBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
    let apiResponseBooks :Book[] = [book1, book2, book3]
    const expectedBooks :Book[] = [book1, book2, book3]
    // Stimulus
    service.filterOnlyValidBooks(apiResponseBooks)
    service.getBooks().subscribe((books) => {
      apiResponseBooks = books;
      // Expected Behavior
      expect(apiResponseBooks.toString()).toBe(expectedBooks.toString());
    })
  });

  it('should not filter books into final array', () => {
  /*
  * should not filter books into final array [TEST] .- Test for verifying if the filterOnlyValidBooks works, it should filter out all books
  */
    //Initialization
    const book1 : Book = new Book()
    book1.etag = "OI6TXnR4wOY"
    book1.id = "sfZznQEACAAJ"
    book1.kind = "books#volume"
    book1.selfLink = "https://www.googleapis.com/books/v1/volumes/sfZznQEACAAJ"
    book1.volumeInfo.title = "Cartas a Clara"
    book1.volumeInfo.authors = ["Juan Rulfo","Clara Aparicio de Rulfo","Alberto Vital Díaz"]
    const book2: Book =  new Book()
    book2.etag = "DuYSINpgRrU"
    book2.id = "iw-nx_UZvrwC"
    book2.kind = "books#volume"
    book2.selfLink = "https://www.googleapis.com/books/v1/volumes/iw-nx_UZvrwC",
    book2.volumeInfo.title = "Grupo B. Administracion General de la Generalitat Valenciana (rama Juridica). Temario Bloque. Especifico. Volumen Ii"
    book2.volumeInfo.authors = ["José Luís López"]
    book2.volumeInfo.imageLinks = {
      "smallThumbnail": "http://books.google.com/books/content?id=iw-nx_UZvrwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=iw-nx_UZvrwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
    const book3 :  Book = new Book()
    book3.etag = "6YR1QITpQbM"
    book3.id = "kUyBBwAAQBAJ"
    book3.kind = "books#volume"
    book3.selfLink = "https://www.googleapis.com/books/v1/volumes/kUyBBwAAQBAJ",
    book3.volumeInfo.title = "Test de examen de conducir DGT permiso B - Turismos"
    book3.volumeInfo.authors = ["Adanat Seguridad Vial"]
    book3.volumeInfo.imageLinks = {
      "smallThumbnail": "http://books.google.com/books/content?id=kUyBBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=kUyBBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
    let apiResponseBooks :Book[] = [book1, book2, book3]
    const expectedBooks :Book[] = [book2, book3]
    // Stimulus
    service.filterOnlyValidBooks(apiResponseBooks)
    service.getBooks().subscribe((books) => {
      apiResponseBooks = books;
      // Expected Behavior
      expect(apiResponseBooks.toString()).toBe(expectedBooks.toString());
    })
  });
});
