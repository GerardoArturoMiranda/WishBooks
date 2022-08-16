/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterModule } from '@angular/router';
// 3rd Application Developers Imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Personal Imports
import { BooksContainerComponent } from '../../components/books-container/books-container.component'
import { HeaderComponent } from '../../components/header/header.component';
import { LandingPageComponent } from './landing-page.component';
import { ModalComponent } from '../../components/modal/modal.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FontAwesomeModule, RouterModule ],
      declarations: [ LandingPageComponent, ModalComponent, HeaderComponent, BooksContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
