import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryPageComponent } from "./modules/gallery/gallery-page/gallery-page.component";
import { LandingPageComponent } from "./modules/home/landing-page/landing-page.component";

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
