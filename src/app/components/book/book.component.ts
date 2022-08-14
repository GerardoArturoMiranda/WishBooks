import { Component, Input, OnInit } from '@angular/core';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Book } from 'src/app/models/Book';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  @Input() book!: Book;
  faPlus!: IconDefinition 
  faInfo!: IconDefinition

  constructor() {
    this.instantiateVariables()
  }

  ngOnInit(): void {
    console.info(this.book)
  }

  instantiateVariables(){
    this.book = new Book()
    this.faPlus = faPlus 
    this.faInfo =  faInfo
  }
  addToWishList(){
    Swal.fire({
      icon: "success",
      title: '<div class="success-text">Added to your wishlist</div>',
      confirmButtonColor: '#8A8D93',
      confirmButtonText: '<div class="success-text">Aceptar</div>',
      allowOutsideClick: false,
      allowEscapeKey: false,
      reverseButtons: true,
      focusConfirm:false
    })
  }
}
