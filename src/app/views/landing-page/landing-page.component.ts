/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { Component, OnInit } from '@angular/core';
// 3rd Application Developers Imports
import { faLightbulb, IconDefinition } from '@fortawesome/free-solid-svg-icons';
// Personal Imports
import { Book } from '../../models/Book'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {
  protected faLightbulb!: IconDefinition
  constructor() { }

  ngOnInit(): void {
    this.instantiateVariables()
  }

  private instantiateVariables(){
    /*
    * instantiateVarible .- Method for instantiating data, this method is called in the constructor
    *                               or in the ngOnInit methods, this is for minimizing the error of having 
    *                               null exceptions or data as undefined. Mostly the variables should be 
    *                               ready in the constructor
    */
    this.faLightbulb = faLightbulb
    const books: Book[] = []
    !sessionStorage.getItem('YourWishlist') && sessionStorage.setItem('YourWishlist', JSON.stringify(books))
  }

}
