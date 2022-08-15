import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { BookDetailComponent } from './views/book-detail/book-detail.component';
import { MyWishlistComponent } from './views/my-wishlist/my-wishlist.component';
const routes: Routes = [
  {path: 'myWishlist', component: MyWishlistComponent ,
    children: [
      { path: ':id', component: BookDetailComponent},
    ]
  },
  { path: '', component: LandingPageComponent,
    children: [
      { path: ':id', component: BookDetailComponent},
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
