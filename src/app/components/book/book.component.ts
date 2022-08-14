import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Book } from 'src/app/models/Book';
import Swal from 'sweetalert2';
import { ModalService } from '../modal/modal.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  @Input() book!: Book;
  faPlus!: IconDefinition 
  faInfo!: IconDefinition
  faStar!: IconDefinition

  constructor(private router: Router, private modal: ModalService) {
    this.instantiateVariables()
  }

  ngOnInit(): void {
  }

  instantiateVariables(){
    this.book = new Book()
    this.faPlus = faPlus 
    this.faInfo =  faInfo
    this.faStar = faStar
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

  moreInfo(){
    this.modal.openModal()
    this.router.navigateByUrl("/"+this.book.id)
  }
}
