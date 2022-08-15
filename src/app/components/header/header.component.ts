/*
* Arturo Miranda, August 13th, 2022
* Standarization and Notation in Documentation
*/
// Angular Imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// 3rd Application Developers Imports
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
// Personal Imports
import { LandingPageService } from '../../views/landing-page/landing-page.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  protected faSearch!: IconDefinition
  protected wordToSearch!: string
  constructor(protected landingPageService: LandingPageService, protected router: Router) {
    this.instantiateVariables()
  }

  ngOnInit(): void {
  }

  private instantiateVariables(){
    /*
    * instantiateVarible .- Method for instantiating data, this method is called in the constructor
    *                               or in the ngOnInit methods, this is for minimizing the error of having 
    *                               null exceptions or data as undefined. Mostly the variables should be 
    *                               ready in the constructor
    */
    this.wordToSearch = ""
    this.faSearch = faSearch
  }

  searchBookTitle(){
    /*
    * searchBookTitle .- Method for looking up books with the word that the user typed in header.
    *                            the public method of the service calls again the petition.
    */
    this.landingPageService.setBookSearch(this.wordToSearch)
  }

  navigateTo(url: string){
    /*
    * navigateTo .- Method navigating to the following route.
    */
    this.router.navigateByUrl(url)
  }
}
