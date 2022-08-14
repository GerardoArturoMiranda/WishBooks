import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private modal: ModalService, private activatedRoute: ActivatedRoute) {
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
    const wishlist: Book[] = sessionStorage.getItem('YourWishlist') && JSON.parse(sessionStorage.getItem('YourWishlist')!)
    wishlist.push(this.book)
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
    sessionStorage.setItem('YourWishlist', JSON.stringify(wishlist))
  }

  moreInfo(){
    this.modal.openModal()

    this.activatedRoute.url.subscribe(() => {
      this.router.navigateByUrl(this.router.url+'/'+this.book.id)
    });
  }
}
