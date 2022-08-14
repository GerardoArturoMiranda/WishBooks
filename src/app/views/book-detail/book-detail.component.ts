import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookDetailService } from './book-detail.service';
import { faWindowMinimize, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/components/modal/modal.service';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.sass']
})
export class BookDetailComponent implements OnInit {
  book!: Book
  faWindowMinimize!: IconDefinition 
  faGoogle! : IconDefinition
  faPlus!: IconDefinition;
  faStar!: IconDefinition
  constructor(private activatedRoute: ActivatedRoute, private router: Router, protected bookDetailService: BookDetailService, private modal: ModalService) {
    this.instantiateVariables()
    this.activatedRoute.params.subscribe(async routeParams => {
      this.book.id = routeParams['id']
      this.fetchBook(this.book.id)
    })
  }

  ngOnInit(): void {
  }

  instantiateVariables(){
    this.book = new Book()
    this.faWindowMinimize = faWindowMinimize
    this.faGoogle = faGoogle
    this.faPlus = faPlus
    this.faStar = faStar
  }


  private fetchBook(bookId: string = ""){
    this.bookDetailService.fetchBook(bookId).subscribe((book)=> {
      this.book = book
      this.manageNullBookValues()
    })
  }
  
  back(){
    this.modal.closeModal()
    this.router.navigateByUrl("")
  }

  manageNullBookValues(){
    this.book.volumeInfo.description == null ? this.book.volumeInfo.description = "No summary available for this title." : null
    this.book.volumeInfo.authors == [] ? this.book.volumeInfo.authors = ["No authors available for this title"] : null
    this.book.volumeInfo.publisher == null ? this.book.volumeInfo.publisher = "No publishers available for this title" : null
    this.book.volumeInfo.averageRating == null ? this.book.volumeInfo.averageRating = 1  : this.book.volumeInfo.averageRating = Math.ceil(this.book.volumeInfo.averageRating)
  }

  openWindow(){
    window.open(this.book.volumeInfo.previewLink, "_blank");
  }

  counter(i: number) {
    return new Array(i);
  }
}
