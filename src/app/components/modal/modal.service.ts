import { Injectable, Renderer2, RendererFactory2, ViewChild } from '@angular/core';
// Enable Jquery 
declare var $: any;
@Injectable({
  providedIn: 'root'
})

export class ModalService {
  // Variable for modifying the modal router outlet status
  private _isOpen!: boolean;
  constructor() {
  } 

  openModal(): void {
    /* 
    * openSidebar .- Opens the router Modal
    */
    !this._isOpen && this.negation(1)
    $("body").css( "overflow", "hidden" );
  }

  closeModal(): void {
    /* 
    * closeSidebar .- Closes the router Modal
    */
    this._isOpen && this.negation(0)
    $("body").css( "overflow", "scroll" );
  }

  negation(state: number){
    /* 
    * negation .- Method for making the querySelection of modal class to set it unactive or active.
    */
    if(state == 1){
      document.querySelector('.modal-redirect')?.classList.add('active');
      this._isOpen = true
    }else{
      document.querySelector('.modal-redirect')?.classList.remove('active');
      this._isOpen = false
    }
  }
}