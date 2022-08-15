import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { Book, VolumeInfo } from '../../../app/models/Book';
import { ModalService } from '../modal/modal.service';
import { BookComponent } from './book.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
              snapshot: {
                  paramMap: {
                      get(): string {
                          return '123';
                      },
                  },
              },
          },
      },
        {provide: ModalService},
        {provide: RouterTestingModule}      ],
      imports: [ HttpClientTestingModule, FontAwesomeModule ],
      declarations: [ BookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test('should add to wishlist', ()=>{
  //   const testBook =  new Book()
  //   testBook.etag = "Test"
  //   testBook.id = "a1"
  //   testBook.kind = ""
  //   testBook.selfLink = ""
  //   testBook.volumeInfo =  new VolumeInfo()
  //   component.book = testBook
  //   component.addToWishList()
  //   expect(JSON.parse(sessionStorage.getItem('YourWishlist')!).toBe(testBook))
  // })
});
