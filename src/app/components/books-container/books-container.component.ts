/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Personal Imports
import { Book } from 'src/app/models/Book';
import { LandingPageService } from 'src/app/views/landing-page/landing-page.service';
// Enable Jquery 
declare var $: any;
@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.sass']
})
export class BooksContainerComponent implements OnInit, AfterViewInit {
  protected books!: Book[]
  protected index!: number
  constructor(protected landingPageService: LandingPageService, protected router: Router) {
  }
  
  ngAfterViewInit(): void {
    this.router.url == '/' && this.fetchBooks(undefined, this.index) 
  }

  ngOnInit(): void {
    this.instantiateVariables()
    // Subscribing to books variable of the dependecy 'LandingPageService'
    this.router.url == '/' && this.landingPageService.getBooks().subscribe((books) => {
      this.books = books;
    })
    // Infinite Scrolling
    this.router.url == '/' && $(window).scroll(function () {
      if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
        $('#loadMore').click()
      }
   });
  }

  private instantiateVariables(){
    /*
    * instantiateVarible .- Method for instantiating data, this method is called in the constructor
    *                               or in the ngOnInit methods, this is for minimizing the error of having 
    *                               null exceptions or data as undefined. Mostly the variables should be 
    *                               ready in the constructor
    */
    this.books = []
    this.router.url == '/myWishlist' && sessionStorage.getItem('YourWishlist') ? this.books = JSON.parse(sessionStorage.getItem('YourWishlist')!) : null
    this.index = 0
  } 

  private fetchBooks(stringToSearch: string = "a", pageNumber: number = 0){
    /*
    * fetchBooks .- Method for fetching a group of books, the query specifications are landinPageService
    *                     There's a Timeout of 2 seconds for avoiding 'resource exhausted exception' by the API
    */
    setTimeout(()=>{
      this.landingPageService.fetchBooks(stringToSearch, pageNumber).subscribe()
    }, 2000)
  }

  protected loadMore(){
    /*
    * loadMore .- Method for fetching a new group of books, the query specifications are landinPageService
    *                    the index value us added because the query of the endpoint needs the page.
    */
    this.index += 1
    this.fetchBooks(undefined, this.index)
  }
}

