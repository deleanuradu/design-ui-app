import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './modules/home/home.component';
import { GalleryPageComponent } from './modules/gallery/gallery-page/gallery-page.component';
import { TopBarComponent } from './modules/home/top-bar/top-bar.component';
import { SideBarComponent } from './modules/home/side-bar/side-bar.component';
import { LandingPageComponent } from './modules/home/landing-page/landing-page.component';
import { ImageCardComponent } from './modules/gallery/image-card/image-card.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryPageComponent,
    TopBarComponent,
    SideBarComponent,
    LandingPageComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
