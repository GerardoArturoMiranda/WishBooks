import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookDetailService } from './book-detail.service';
import { faAngleLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/components/modal/modal.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.sass']
})
export class BookDetailComponent implements OnInit {
  book!: Book
  faAngleLeft!: IconDefinition 
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
    this.faAngleLeft = faAngleLeft
  }


  private fetchBook(bookId: string = ""){
    this.bookDetailService.fetchBook(bookId).subscribe((book)=> {
      this.book = book
      this.book.volumeInfo.title
    })
  }
  
  back(){
    this.modal.closeModal()
    this.router.navigateByUrl("")
  }
}
