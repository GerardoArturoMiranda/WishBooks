/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';
// Personal Imports
import { BookDetailService } from './book-detail.service';

describe('BookDetailService', () => {
  let service: BookDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClientModule},
        {provide: HttpClient}
      ],
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(BookDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
