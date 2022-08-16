/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterModule } from '@angular/router';
// 3rd Application Developers Imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Personal Imports
import { BooksContainerComponent } from '../../components/books-container/books-container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { MyWishlistComponent } from './my-wishlist.component';

describe('MyWishlistComponent', () => {
  let component: MyWishlistComponent;
  let fixture: ComponentFixture<MyWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FontAwesomeModule, RouterModule ],
      declarations: [ MyWishlistComponent, ModalComponent, HeaderComponent, BooksContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
