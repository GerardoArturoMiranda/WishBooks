import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LandingPageService } from './landing-page.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('LandingPageService', () => {
  let service: LandingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClientModule},
        {provide: HttpClient},
        {provide: HttpHandler}
      ],
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(LandingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
