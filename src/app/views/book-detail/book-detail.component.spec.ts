import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, convertToParamMap} from '@angular/router';
import { ModalService } from '../../components/modal/modal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { BookDetailComponent } from './book-detail.component';
import { BookDetailService } from './book-detail.service';
import { of } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: BookDetailService},
        {provide: ModalService},
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
      }      ],
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
});
