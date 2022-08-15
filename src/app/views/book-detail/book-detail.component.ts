import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookDetailService } from './book-detail.service';
import { faWindowMinimize, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/components/modal/modal.service';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
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
  parentRoute: any;
  constructor(private activatedRoute: ActivatedRoute, protected router: Router, protected bookDetailService: BookDetailService, private modal: ModalService) {
    this.instantiateVariables()
    this.activatedRoute.params.subscribe(async routeParams => {
      this.book.id = routeParams['id']
      this.fetchBook(this.book.id)
    })
  }

  ngOnInit(): void {
    this.modal.openModal()
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
    this.activatedRoute.parent!.url.subscribe((data) => {
      data[0]==null ? this.router.navigateByUrl("/") : this.router.navigateByUrl(data[0].toString())
    });
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
    sessionStorage.setItem('YourWishlist', JSON.stringify(wishlist.filter(Boolean)))
  }
}
