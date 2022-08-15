import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Book } from 'src/app/models/Book';
import Swal from 'sweetalert2';
import { ModalService } from '../modal/modal.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

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
  faTrash!: IconDefinition

  constructor(protected router: Router, private modal: ModalService, private activatedRoute: ActivatedRoute) {
    this.instantiateVariables()
  }

  ngOnInit(): void {
  }

  instantiateVariables(){
    this.book = new Book()
    this.faPlus = faPlus 
    this.faInfo =  faInfo
    this.faStar = faStar
    this.faTrash = faTrash
  }

  addToWishList(){
    const wishlist: Book[] = sessionStorage.getItem('YourWishlist') && JSON.parse(sessionStorage.getItem('YourWishlist')!)
    for(let i = 0; i< wishlist.length; i++){
      if(wishlist[i].id == this.book.id){
        Swal.fire({
          icon: "error",
          title: '<div class="success-text">This book is already in your Wishlist</div>',
          confirmButtonColor: '#8A8D93',
          confirmButtonText: '<div class="success-text">Aceptar</div>',
          allowOutsideClick: false,
          allowEscapeKey: false,
          reverseButtons: true,
          focusConfirm:false
        })
        return
      }
    }
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

  removeFromWishList(){
    let wishlist: Book[] = sessionStorage.getItem('YourWishlist') && JSON.parse(sessionStorage.getItem('YourWishlist')!)
    let indexToDelete = 0
    for(let i = 0; i< wishlist.length; i++){
      if(wishlist[i].id == this.book.id){
        console.log(this.book)
        indexToDelete = i
      }
    }
   delete wishlist[indexToDelete]
    Swal.fire({
      icon: "success",
      title: '<div class="success-text">Deleted from your wishlist</div>',
      confirmButtonColor: '#8A8D93',
      confirmButtonText: '<div class="success-text">Aceptar</div>',
      allowOutsideClick: false,
      allowEscapeKey: false,
      reverseButtons: true,
      focusConfirm:false
    })
    $('.swal2-confirm').click(function() {
      window.location.replace("/myWishlist");
    })
    sessionStorage.setItem('YourWishlist', JSON.stringify(wishlist.filter(Boolean)))
  }

  moreInfo(){
    this.modal.openModal()
    this.activatedRoute.url.subscribe(() => {
      this.router.navigateByUrl(this.router.url+'/'+this.book.id)
    });
  }
}
