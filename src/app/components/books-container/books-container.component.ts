import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { LandingPageService } from 'src/app/views/landing-page/landing-page.service';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.sass']
})
export class BooksContainerComponent implements OnInit {
  protected books?: Book[]
  constructor(protected landingPageService: LandingPageService) { }

  ngOnInit(): void {
    this.instantiateVariables()
    this.landingPageService.fetchBooks().subscribe((books)=> {
      this.books =  books
      console.log(this.books)
    })
  }
  private instantiateVariables(){
    this.books = []
  } 

  loadBooks(){
  }


}
