/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
// 3rd Application Developers Imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Personal Imports
import { BookComponent } from '../book/book.component';
import { BooksContainerComponent } from './books-container.component';
import { LandingPageService } from '../../views/landing-page/landing-page.service';

describe('BooksContainerComponent', () => {
  let component: BooksContainerComponent;
  let fixture: ComponentFixture<BooksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: LandingPageService},
        {provide: RouterTestingModule}
      ],
      imports: [ HttpClientTestingModule, FontAwesomeModule ],
      declarations: [ BooksContainerComponent, BookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
