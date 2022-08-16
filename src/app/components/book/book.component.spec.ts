import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { Book, VolumeInfo } from '../../../app/models/Book';
import { ModalService } from '../modal/modal.service';
import { BookComponent } from './book.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { empty, of } from 'rxjs';
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
        {provide: RouterTestingModule}
      ],
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

  test('should add a book to a not empty wishlist', ()=>{
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

  test('should remove a book from a wishlist', ()=>{
    //Initialization
    // Declaring first Book for Wishlist
    const testBook =  new Book()
    testBook.etag = "Test1"
    testBook.id = "a1"
    // Declaring an empty array for appending it to SessionStorage and the expected Array
    let notEmptyWishlist: Book[] = []
    notEmptyWishlist.push(testBook)
    sessionStorage.setItem('YourWishlist', JSON.stringify(notEmptyWishlist))
    let expectedArray : Book[] = []
    expectedArray.push(testBook)
    // Applying Stimulus
    component.removeFromWishList()
    notEmptyWishlist.pop()
    // Expected Behavior
    expectedArray = JSON.parse(sessionStorage.getItem('YourWishlist')!)
    expect(expectedArray.toString()).toBe(notEmptyWishlist.toString())
  })
});
