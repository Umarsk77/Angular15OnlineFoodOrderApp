import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StarRatingModule, StarRatingConfigService } from 'angular-star-rating';
// import { StarRatingConfigService } from 'angular-star-rating/lib/services/star-rating-config.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarRatingModule.forRoot()


  ],
  providers: [
    StarRatingConfigService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
