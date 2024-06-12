import { Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CartService } from '../../service/cart.service';
import { query } from '@angular/animations';
import { GlobalConfig, ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../service/wishlist.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, interval } from 'rxjs';
import { ThemeToggleService } from '../../service/theme-toggle.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // darkMode=false;
  // toggleTheme(){
  //   this.darkMode=!this.darkMode;
  //   document.documentElement.setAttribute('data-theme',this.darkMode?'dark':'light');
  // }
  

  public minPrice: number | null = null;
  public maxPrice: number | null = null;

  filterByPrice() {
    this.filterCategory = this.productList.filter((item: any) => {
      if ((this.minPrice === null || item.price >= this.minPrice) &&
        (this.maxPrice === null || item.price <= this.maxPrice)) {
        return true;
      }
      return false;
    });
  }

  selectedSortOption: string = "default"; // Default sorting option

  sortProducts() {
    // if (this.selectedSortOption === "asc") {
    //     this.filterCategory.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
    // } else if (this.selectedSortOption === "desc") {
    //     this.filterCategory.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
    // } 
    if (this.selectedSortOption === "default") {
      // Reset to default or unfiltered
      this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price, wishlisted: false,rating: 3  });
        });
        console.log(this.productList)
        console.log(query);
      }, (error) => {
        console.error('API Error is:', error);
        this.errorMsg = true;
        // You can show an error message to the user here
      });

    } else if (this.selectedSortOption === "asc") {
      this.filterCategory.sort((a: any, b: any) => a.price - b.price);
    } else if (this.selectedSortOption === "desc") {
      this.filterCategory.sort((a: any, b: any) => b.price - a.price);
    }
  }

  // sortByPriceAsc() {
  //   this.filterCategory.sort((a: any, b: any) => a.price - b.price);
  // }

  // sortByPriceDesc() {
  //   this.filterCategory.sort((a: any, b: any) => b.price - a.price);
  // }









  searchText: any;
  public productList: any;
  public filterCategory: any
  searchKey: string = "";
  searchItem: any;
  // query:any;
  @Input() products: any[] = [];

  constructor(public theme:ThemeToggleService,public wish: WishlistService, private toastr: ToastrService, private api: ApiService, private cartService: CartService) {
    // this.isDarkMode = this.theme.isDarkMode();
    // this.theme.themeChange.subscribe((darkMode: boolean) => {
    //   this.isDarkMode = darkMode;
    // });
  }
  // toggleTheme(): void {
  //   this.theme.toggleTheme();
  // }

  dataLoaded: boolean = false;
  query = this.api.myData;
  errorMsg: boolean = false;
  showFooter: boolean = false;
  isDarkMode: boolean = false;
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  @HostBinding('class') className = '';

  ngOnInit(): void {
    this.theme.darkMode$.subscribe(darkMode => {
      this.className = darkMode ? 'dark-theme' : 'light-theme';
    });

    setTimeout(() => {
      this.dataLoaded = true;
      if (!this.errorMsg) {
        this.dataLoaded = true; // Set dataLoaded to true only if there's no error
      }
      // Check if both dataLoaded is true and !errorMsg is true to show the footer
      this.showFooter = !this.errorMsg && this.dataLoaded;
    }, 2000);

    console.log('query value' + query)
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price, wishlisted: false,rating: 3  });
        });
        console.log(this.productList)
        console.log(query);
      }, (error) => {
        console.error('API Error is:', error);
        this.errorMsg = true;
        // You can show an error message to the user here
      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })

  }
  // addtocart(item: any) {
  //   this.toastr.success('Item added to cart!', 'Success', { timeOut: 3000 }); // Display the toast on the same page
  //   this.cartService.addtoCart(item);

  // }
  addtocart(item: any) {
    // Check if the item already exists in the cart
    const existingItem = this.cartService.getCartItem(item.title);
    if (existingItem) {
      // If the item exists, increase its quantity
      existingItem.quantity += 1;
      existingItem.total = existingItem.quantity * existingItem.price;
      this.toastr.success('Quantity updated in cart!', 'Success', { timeOut: 3000 }); // Display the toast on the same page
    } else {
      // If the item doesn't exist, add it to the cart
      this.toastr.success('Item added to cart!', 'Success', { timeOut: 3000 }); // Display the toast on the same page
      this.cartService.addtoCart(item);
    }
  }


  changeColorAndAddWishlist(item: any) {
    if (!item.addedToCart) {
      // this.wish.addtoWishlist(item);
      item.addedToCart = true;
      console.log('adding or not')

    } else {
      this.wish.removeFromWishlist(item);
      item.addedToCart = false;
    }
    item.wishlisted = !item.wishlisted;
    // this.wish.toggleWishlist(item.id);
  }






  addOrRemoveFromWishlist(item: any) {
    if (this.wish.isWishlisted(item.id)) {
      this.wish.removeFromWishlist(item.id);
    } else {
      this.wish.addToWishlist(item);
    }
  }

  isWishlisted(itemId: any): boolean {
    return this.wish.isWishlisted(itemId);
  }



  items: any = [];










  handleRatingClick(item: any, clickedRating: number) {

    if (item.rating === clickedRating&& item.rating === 1) {
      item.rating = 0;
    } else {
      item.rating = clickedRating;
    }
  }





  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }






}

