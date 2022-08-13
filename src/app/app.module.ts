import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { MyWishlistComponent } from './views/my-wishlist/my-wishlist.component';
import { HeaderComponent } from './components/header/header.component';
import { BookComponent } from './components/book/book.component';
import { FooterComponent } from './components/footer/footer.component';
import { BooksContainerComponent } from './components/books-container/books-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LandingPageComponent,
    MyWishlistComponent,
    HeaderComponent,
    BookComponent,
    FooterComponent,
    BooksContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
