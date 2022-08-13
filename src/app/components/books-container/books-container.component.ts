import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.sass']
})
export class BooksContainerComponent implements OnInit {
  books?: number[]
  constructor() { }

  ngOnInit(): void {
    this.books = []
    this.books.push(1)
    this.books.push(1)
    this.books.push(1)
    this.books.push(1)
    this.books.push(1)
    this.books.push(1)
    this.books.push(1)
    this.books.push(1)
    this.books.push(1)

  }


}
