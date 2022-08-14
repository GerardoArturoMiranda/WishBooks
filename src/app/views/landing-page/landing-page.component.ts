import { Component, OnInit } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/components/modal/modal.service';
import { Book } from 'src/app/models/Book';
import { LandingPageService } from './landing-page.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {
  faLightbulb = faLightbulb
  constructor() { }

  ngOnInit(): void {
    const books: Book[] = []
    !sessionStorage.getItem('YourWishlist') && sessionStorage.setItem('YourWishlist', JSON.stringify(books))
  }

}
