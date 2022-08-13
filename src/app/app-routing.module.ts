import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent},
  {path: '**', pathMatch: 'full', component: LandingPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
