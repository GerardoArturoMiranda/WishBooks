import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksContainerComponent } from '../../components/books-container/books-container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MyWishlistComponent } from './my-wishlist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

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
