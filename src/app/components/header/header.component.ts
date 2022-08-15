import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { LandingPageService } from 'src/app/views/landing-page/landing-page.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch
  wordToSearch: string = ""
  constructor(protected landingPageService: LandingPageService, protected router: Router) { }

  ngOnInit(): void {
  }

  searchBookTitle(){
    this.landingPageService.setBookSearch(this.wordToSearch)
  }

  navigateTo(url: string){
    this.router.navigateByUrl(url)
  }
}
