import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LandingPageService } from '../../views/landing-page/landing-page.service';
import { BookComponent } from '../book/book.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { BooksContainerComponent } from './books-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
declare var $: any;

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
