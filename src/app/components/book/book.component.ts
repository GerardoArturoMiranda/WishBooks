/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// 3rd Application Developers Import
import { faPlus, faInfo, faStar, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
// Personal Imports
import { Book } from 'src/app/models/Book';
import { ModalService } from '../modal/modal.service';
// Enable Jquery 
declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  // Varible for the props Data
  @Input() book!: Book;
  // Variables for enabling Fontawesome Tags
  faInfo!: IconDefinition
  faPlus!: IconDefinition 
  faStar!: IconDefinition
  faTrash!: IconDefinition

  constructor(private activatedRoute: ActivatedRoute, private modal: ModalService, protected router: Router,) {
    this.instantiateVariables()
  }

  ngOnInit(): void {
  }

  instantiateVariables(){
    /*
    * instantiateVarible .- Method for instantiating data, this method is called in the constructor
    *                               or in the ngOnInit methods, this is for minimizing the error of having 
    *                               null exceptions or data as undefined.
    */
    this.book = new Book()
    this.faInfo =  faInfo
    this.faPlus = faPlus 
    this.faStar = faStar
    this.faTrash = faTrash
  }

  // Functionality Methods 
  addToWishList(){
    const wishlist: Book[] = sessionStorage.getItem('YourWishlist') && JSON.parse(sessionStorage.getItem('YourWishlist')!)
    if(this.findSameRegister(wishlist) == 1){
      return
    }
    wishlist.push(this.book)
    Swal.fire({
      icon: "success",
      title: '<div class="success-text">Added to your wishlist</div>',
      confirmButtonColor: '#8A8D93',
      confirmButtonText: '<div class="success-text">Got it</div>',
      allowOutsideClick: false,
      allowEscapeKey: false,
      reverseButtons: true,
      focusConfirm:false
    })
    this.assignToSessionStorage(wishlist)
  }

  assignToSessionStorage(wishlist: Book[]){
    sessionStorage.setItem('YourWishlist', JSON.stringify(wishlist))
  }

  findSameRegister(wishlist: Book[]): number{
    for(let i = 0; i< wishlist.length; i++){
      if(wishlist[i].id == this.book.id){
        Swal.fire({
          icon: "error",
          title: '<div class="success-text">This book is already in your Wishlist</div>',
          confirmButtonColor: '#8A8D93',
          confirmButtonText: '<div class="success-text">Got it</div>',
          allowOutsideClick: false,
          allowEscapeKey: false,
          reverseButtons: true,
          focusConfirm:false
        })
        return 1
      }
    }
    return -1
  }

  moreInfo(){
    this.modal.openModal()
    this.activatedRoute.url.subscribe(() => {
      this.router.navigateByUrl(this.router.url+'/'+this.book.id)
    });
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
}
