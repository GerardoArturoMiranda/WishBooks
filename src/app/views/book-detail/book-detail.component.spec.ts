/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { ActivatedRoute, Router, convertToParamMap} from '@angular/router';
import { Book } from '../../models/Book'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
// 3rd Application Developers Imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Personal Imports
import { BookDetailComponent } from './book-detail.component';
import { BookDetailService } from './book-detail.service';
import { ModalService } from '../../components/modal/modal.service';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: BookDetailService},
        {provide: ModalService},
        {provide: ActivatedRoute,
          useValue: {
              snapshot: {
                  paramMap: {
                      get(): string {
                          return '12345678';
                      },
                  },
              },
          },
        }],
      imports: [ HttpClientTestingModule, FontAwesomeModule],
      declarations: [ BookDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should add a book to a not empty wishlist', ()=>{
  /*
  * should add a book to a not empty wishlist [TEST] .- Test for verifying if the addToWishlistMethod works, it should add 
  *                                                                             a book to the user's wishlist
  */
    //Initialization
    // Declaring first Book for Wishlist
    const testBook =  new Book()
    testBook.etag = "Test1"
    testBook.id = "a1"
    // Declaring an empty array for appending it to SessionStorage and the expected Array
    let emptyWishlist: Book[] = []
    emptyWishlist.push(testBook)
    sessionStorage.setItem('YourWishlist', JSON.stringify(emptyWishlist))
    let expectedArray : Book[] = []
    expectedArray.push(testBook)
    // Stimulus
    const testBook2 =  new Book()
    testBook2.etag = "Test1"
    testBook2.id = "a1"
    // Applying Stimulus
    component.book = testBook2
    component.addToWishList()
    // Expected Behavior
    expectedArray = JSON.parse(sessionStorage.getItem('YourWishlist')!)
    expect(expectedArray.toString()).toBe(emptyWishlist.toString())
  })

  test('should not add a book to an empty wishlist', ()=>{
  /*
  * should not add a book to an empty wishlist [TEST] .- Test for verifying if the addToWishlistMethod works, it should not add 
  *                                                                             a book to the user's wishlist
  */
    //Initialization
    // Declaring an empty array for appending it to SessionStorage and the expected Array
    let emptyWishlist: Book[] = []
    sessionStorage.setItem('YourWishlist', JSON.stringify(emptyWishlist))
    let expectedArray : Book[]
    // Stimulus
    const testBook =  new Book()
    testBook.etag = "Test1"
    testBook.id = "a1"
    // Applying Stimulus to Component
    component.book = testBook
    component.addToWishList()
    emptyWishlist.push(testBook)
    // Expected Behavior
    expectedArray = JSON.parse(sessionStorage.getItem('YourWishlist')!)
    expect(expectedArray.toString()).toBe(emptyWishlist.toString())
  })

  test('should add a book to a not empty wishlist', ()=>{
  /*
  * should add a book to a not empty wishlist [TEST] .- Test for verifying if the addToWishlistMethod works, it should add 
  *                                                                             a book to the user's wishlist
  */
    //Initialization
    // Declaring first Book for Wishlist
    const testBook =  new Book()
    testBook.etag = "Test1"
    testBook.id = "a1"
    // Declaring an empty array for appending it to SessionStorage and the expected Array
    let emptyWishlist: Book[] = []
    emptyWishlist.push(testBook)
    sessionStorage.setItem('YourWishlist', JSON.stringify(emptyWishlist))
    let expectedArray : Book[] = []
    expectedArray.push(testBook)
    // Stimulus
    const testBook2 =  new Book()
    testBook2.etag = "Test2"
    testBook2.id = "a2"
    // Applying Stimulus
    component.book = testBook2
    component.addToWishList()
    emptyWishlist.push(testBook)
    // Expected Behavior
    expectedArray = JSON.parse(sessionStorage.getItem('YourWishlist')!)
    expect(expectedArray.toString()).toBe(emptyWishlist.toString())
  })
});
