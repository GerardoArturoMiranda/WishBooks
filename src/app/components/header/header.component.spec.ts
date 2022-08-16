/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
// 3rd Application Developers Imports
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Personal Imports
import { HeaderComponent } from './header.component';
import { LandingPageService } from '../../views/landing-page/landing-page.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: HttpClientModule},
        {provide: HttpClient},
        {provide: HttpHandler},
        {provide: LandingPageService},
        {provide: RouterTestingModule}
      ],
      imports: [ HttpClientTestingModule, FormsModule, FontAwesomeModule],
      declarations: [ HeaderComponent, FaIconComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
