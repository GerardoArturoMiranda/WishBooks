/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// 3rd Application Developers Imports
import { faPlus, faStar, faWindowMinimize, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';
// Personal Imports
import { Book } from 'src/app/models/Book';
import { BookDetailService } from './book-detail.service';
import { ModalService } from 'src/app/components/modal/modal.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.sass']
})
export class BookDetailComponent implements OnInit {
  // Varible for displaying the book data
  book!: Book
  // Variables for enabling Fontawesome Tags
  faGoogle! : IconDefinition
  faPlus!: IconDefinition;
  faStar!: IconDefinition
  faWindowMinimize!: IconDefinition 
  
  constructor(private activatedRoute: ActivatedRoute, private modal: ModalService, protected router: Router, protected bookDetailService: BookDetailService){
    this.instantiateVariables()
    this.activatedRoute.params.subscribe(async routeParams => {
      this.book.id = routeParams['id']
      this.fetchBook(this.book.id)
    })
  }

  ngOnInit(): void {
    this.modal.openModal()
  }

  private instantiateVariables(){
    /*
    * instantiateVarible .- Method for instantiating data, this method is called in the constructor
    *                               or in the ngOnInit methods, this is for minimizing the error of having 
    *                               null exceptions or data as undefined. Mostly the variables should be 
    *                               ready in the constructor
    */
    this.book = new Book()
    this.faGoogle = faGoogle
    this.faPlus = faPlus
    this.faStar = faStar
    this.faWindowMinimize = faWindowMinimize
  }
  
  protected addToWishList(){
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

  protected counter(i: number) {
    return new Array(i);
  }

  private fetchBook(bookId: string = ""){
    /*
    * fetchBooks .- Method for fetching a book, the query is in the service, it will
    *                     fill the class book object with the response.
    *                     The API might bring incomplete registers, there's a null parameters
    *                     method manager ahead.
    */
    this.bookDetailService.fetchBook(bookId).subscribe((book)=> {
      this.book = book
      this.manageNullBookValues()
    })
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

  protected goBack(){
    /*
    * goBack .- Method for returning to the previous route, wishlist or landingpage
    */
    this.modal.closeModal()
    this.activatedRoute.parent!.url.subscribe((data) => {
      data[0]==null ? this.router.navigateByUrl("/") : this.router.navigateByUrl(data[0].toString())
    });
  }

  private manageNullBookValues(){
    /*
    * manageNullBookValues .- Method for managing NULL and empty values from the api response, it's pretty important
    *                                         to transform data for the correct display of the component.
    */
    this.book.volumeInfo.description == null ? this.book.volumeInfo.description = "No summary available for this title." : null
    this.book.volumeInfo.authors == [] ? this.book.volumeInfo.authors = ["No authors available for this title"] : null
    this.book.volumeInfo.publisher == null ? this.book.volumeInfo.publisher = "No publishers available for this title" : null
    this.book.volumeInfo.averageRating == null ? this.book.volumeInfo.averageRating = 1  : this.book.volumeInfo.averageRating = Math.ceil(this.book.volumeInfo.averageRating)
  }

  protected openWindow(){
    /*
    * openWindow .- Method for redirecting to a new explorer tab, this will open the preview link, which is the information of the book
    *                         and for buying the book and check the availability.
    */
    window.open(this.book.volumeInfo.previewLink, "_blank");
  }

  private throwModalMessage(index: number){
    /*
    * throwModalMessage .- Method for throwing the sweet alerts of the different transactions.
    *                                 Index Catalog:
    *                                 1.- Added to your wishlist : No redirection to url
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
