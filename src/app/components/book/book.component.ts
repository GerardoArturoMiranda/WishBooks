/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// 3rd Application Developers Imports
import { faPlus, faInfo, faStar, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
// Personal Imports
import { Book } from '../../models/Book'
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
  protected faInfo!: IconDefinition
  protected faPlus!: IconDefinition 
  protected faStar!: IconDefinition
  protected faTrash!: IconDefinition

  constructor(private activatedRoute: ActivatedRoute, private modal: ModalService, protected router: Router,) {
    this.instantiateVariables()
  }

  ngOnInit(): void {
  }

  private instantiateVariables(){
    /*
    * instantiateVarible .- Method for instantiating data, this method is called in the constructor
    *                               or in the ngOnInit methods, this is for minimizing the error of having 
    *                               null exceptions or data as undefined. Mostly the variables should be 
    *                               ready in the constructor
    */
    this.book = new Book()
    this.faInfo =  faInfo
    this.faPlus = faPlus 
    this.faStar = faStar
    this.faTrash = faTrash
  }

  // Functionality Methods 

  addToWishList(){
    /*
    * addToWishList .- Method for adding a book from the landing page to a personal wishlist, it's saved by adding it 
    *                           in the sessionStorage, here we do the following actions:
    *                               •Verify if there's an existing register with the same id 
    *                               •Stop Transaction if the books is already in 'MyWishlist'
    *                               •Push a new book to 'MyWishlist'.
    */
    const wishlist: Book[] = sessionStorage.getItem('YourWishlist') && JSON.parse(sessionStorage.getItem('YourWishlist')!)
    if(this.findSameRegister(wishlist) == 1){
      return
    }
    wishlist.push(this.book)
    this.throwModalMessage(1)
    this.assignToSessionStorage(wishlist)
  }

  private assignToSessionStorage(wishlist: Book[]){
    /*
    * assignToSessionStorage .- Method for for saving in the sessioStorage your wishlist.
    */
    sessionStorage.setItem('YourWishlist', JSON.stringify(wishlist))
  }

  private findSameRegister(wishlist: Book[]): number{
    /*
    * findSameRegister .- Method for checking if there's an existing record with the same id, it's coded
    *                              with a for loop, because the callback methoda weren't working.
    */
    for(let i = 0; i< wishlist.length; i++){
      if(wishlist[i].id == this.book.id){
        this.throwModalMessage(3)
        return 1
      }
    }
    return -1
  }

  protected moreInfo(){
    /*
    * moreInfo .- Method for opening the side-navbar-detail view, here is passed the route
    *                  with the id of the book.
    */
    this.modal.openModal()
    this.activatedRoute.url.subscribe(() => {
      this.router.navigateByUrl(this.router.url+'/'+this.book.id)
    });
  }

  protected removeFromWishList(){
    /*
    * removeFromWishList .- Method for removing a book from myWishlist, it's saved the new array in the sessionStorage, here we do the following actions:
    *                               •Verify if there's an existing register with the same id 
    *                               •Selecting the index of the book which is already in 'MyWishlist'
    *                               •Push the new wishlist to 'MyWishlist'.
    */
    let wishlist: Book[] = sessionStorage.getItem('YourWishlist') && JSON.parse(sessionStorage.getItem('YourWishlist')!)
    let indexToDelete = 0
    for(let i = 0; i< wishlist.length; i++){
      if(wishlist[i].id == this.book.id){
        indexToDelete = i
      }
    }
    delete wishlist[indexToDelete]
    this.throwModalMessage(2)
    sessionStorage.setItem('YourWishlist', JSON.stringify(wishlist.filter(Boolean)))
  }

  private throwModalMessage(index: number){
    /*
    * throwModalMessage .- Method for throwing the sweet alerts of the different transactions.
    *                                 Index Catalog:
    *                                 1.- Added to your wishlist : No redirection to url
    *                                 2.- Deleted from your wishlist : Redirection to my wishlist url
    *                                 3.- This book is already in your wishlist : No redirection to url
    */
    index == 1 && Swal.fire({
      icon: "success",
      title: '<div class="success-text">Added to your wishlist</div>',
      confirmButtonColor: '#8A8D93',
      confirmButtonText: '<div class="success-text">Got it</div>',
      allowOutsideClick: false,
      allowEscapeKey: false,
      reverseButtons: true,
      focusConfirm:false
    })
    index == 2 && Swal.fire({
      icon: "success",
      title: '<div class="success-text">Deleted from your wishlist</div>',
      confirmButtonColor: '#8A8D93',
      confirmButtonText: '<div class="success-text remove">Aceptar</div>',
      allowOutsideClick: false,
      allowEscapeKey: false,
      reverseButtons: true,
      focusConfirm:false
    })
    index == 2 && $('.swal2-confirm').click(function() {
      window.location.replace("/myWishlist");
    })
    index == 3 &&Swal.fire({
      icon: "error",
      title: '<div class="success-text">This book is already in your Wishlist</div>',
      confirmButtonColor: '#8A8D93',
      confirmButtonText: '<div class="success-text">Got it</div>',
      allowOutsideClick: false,
      allowEscapeKey: false,
      reverseButtons: true,
      focusConfirm:false
    })
  }
}
