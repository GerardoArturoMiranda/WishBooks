/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// 3rd Application Developers Imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// Personal Imports
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BookDetailComponent } from './views/book-detail/book-detail.component';
import { BooksContainerComponent } from './components/books-container/books-container.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { MyWishlistComponent } from './views/my-wishlist/my-wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BooksContainerComponent,
    HeaderComponent,
    LandingPageComponent,
    ModalComponent,
    MyWishlistComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
