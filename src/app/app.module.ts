import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AlertModule } from 'ng2-bootstrap';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageService } from './image-detail/shared/image.service';
import { ImageFilterPipe } from './image-detail/shared/filter.pipe';

const appRoutes : Routes = 
[
  { path : 'about' , component: AboutComponent},
  { path : 'home', component : HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path : 'contact', component : ContactComponent},
  { path: "category/:category", component: ImageDetailComponent }
];

export function HttpLoaderFactory(http: HttpClient) 
{
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}

@NgModule({
  declarations: 
  [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ImageDetailComponent,
    ImageFilterPipe
  ],
  imports: 
  [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    AlertModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
