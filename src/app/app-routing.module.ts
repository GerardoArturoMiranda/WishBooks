import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { BookDetailComponent } from './views/book-detail/book-detail.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent,
    children: [
      { path: ':id', component: BookDetailComponent},
    ]},
  {path: '**', pathMatch: 'full', component: LandingPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
