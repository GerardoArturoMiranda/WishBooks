import { Component, OnInit } from '@angular/core';
import { faHeart, IconDefinition } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrls: ['./my-wishlist.component.sass']
})
export class MyWishlistComponent implements OnInit {
  protected faHeart!: IconDefinition
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
    this.faHeart = faHeart
  }
}
