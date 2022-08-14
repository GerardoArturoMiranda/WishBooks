import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { LandingPageService } from 'src/app/views/landing-page/landing-page.service';
declare var $: any;

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.sass']
})
export class BooksContainerComponent implements OnInit {
  protected books!: Book[]
  protected index!: number
  constructor(protected landingPageService: LandingPageService) { }

  ngOnInit(): void {
    this.instantiateVariables()
    this.fetchBooks(undefined, this.index)
    $(window).scroll(function () {
      if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
        $('#loadMore').click()
      }
   });
  }
  private instantiateVariables(){
    this.books = []
    this.index = 0
  } 

  private fetchBooks(stringToSearch: string = "a", pageNumber: number = 0){
    setTimeout(()=>{
      this.landingPageService.fetchBooks(stringToSearch, pageNumber).subscribe((books)=> {
        this.filterOnlyValidBooks(books)
      })
    }, 2000)
  }

  nextPage(){
    this.index += 1
    this.fetchBooks(undefined, this.index)
  }

  filterOnlyValidBooks(books: Book[]){
    books.forEach((book)=>{
      if(book.volumeInfo.imageLinks != undefined && book.volumeInfo.authors != undefined){
        this.books.push(book)
        this.books = this.books.filter((a, i) => this.books.findIndex((s) => a.id === s.id) === i)
      }
    })
  }

}

