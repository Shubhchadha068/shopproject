import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButton, MatButtonModule} from '@angular/material/button';

import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavlinkComponent } from './navlink/navlink.component';

import { ApwallpaintComponent } from './apwallpaint/apwallpaint.component';
import { ApbrushComponent } from './apbrush/apbrush.component';
import { ApwallputtyComponent } from './apwallputty/apwallputty.component';
import { ApwallkretexComponent } from './apwallkretex/apwallkretex.component';
import { ApwallpaperComponent } from './apwallpaper/apwallpaper.component';
import { DoorpaintComponent } from './doorpaint/doorpaint.component';
import { SmartcareComponent } from './smartcare/smartcare.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GalleryComponent } from './gallery/gallery.component';
// For MDB Angular Pro
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutComponent } from './about/about.component';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    NavbarComponent,
    NavlinkComponent,

    ApwallpaintComponent,

    ApbrushComponent,

    ApwallputtyComponent,

    ApwallkretexComponent,

    ApwallpaperComponent,

    DoorpaintComponent,

    SmartcareComponent,

    AdminComponent,

    PagenotfoundComponent,

    GalleryComponent,

    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
