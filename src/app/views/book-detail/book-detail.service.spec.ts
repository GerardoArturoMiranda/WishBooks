import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
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
