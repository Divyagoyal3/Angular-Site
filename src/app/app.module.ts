import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { PaginatorModule } from 'primeng/paginator';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatSliderModule } from '@angular/material/slider';
import { SearchPipe } from './pipes/search.pipe';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ProductsComponent,
    FilterPipe,
    LoginFormComponent,
    SignUpFormComponent,
    SearchPipe,
    WishlistComponent,
    CarouselComponent,
    FooterComponent,
    ThemeToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    CarouselModule.forRoot(),
    MatSliderModule,
    MatIconModule,
    ToastrModule.forRoot(
      {
        // toastClass: 'custom-toast', 
        timeOut: 2000, 
        // positionClass: 'toast-top-right',
        positionClass: 'toast-top-right',
        toastClass: 'custom-toast'
      }
    ) ,
    BrowserAnimationsModule, 
    
    // Ng2SearchPipeModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
