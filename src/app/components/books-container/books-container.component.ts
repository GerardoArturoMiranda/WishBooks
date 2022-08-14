import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { LandingPageService } from 'src/app/views/landing-page/landing-page.service';

declare var $: any;

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.sass']
})
export class BooksContainerComponent implements OnInit, AfterViewInit {
  protected books!: Book[]
  protected index!: number
  constructor(protected landingPageService: LandingPageService, protected router: Router) { }
  
  ngAfterViewInit(): void {
    this.router.url == '/' && this.fetchBooks(undefined, this.index) 
  }

  ngOnInit(): void {
    this.instantiateVariables()
    this.router.url == '/' && this.landingPageService.getBooks().subscribe((books) => {
      this.books = books;
    })
    this.router.url == '/' && $(window).scroll(function () {
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
    console.log("Hola")
    setTimeout(()=>{
      this.landingPageService.fetchBooks(stringToSearch, pageNumber).subscribe()
    }, 2000)
  }

  nextPage(){
    this.index += 1
    this.fetchBooks(undefined, this.index)
  }
}

