import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { WishlistService } from '../../service/wishlist.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  // public searchTerm !: string;
  isDarkMode: boolean | undefined;
  isDarkTheme: any;

  constructor(private wish:WishlistService,private router:Router,private cartService : CartService,private api:ApiService) { 
    // this.isDarkMode = this.theme.isDarkMode();
    // this.theme.themeChange.subscribe((darkMode: boolean) => {
    //   this.isDarkMode = darkMode;
    // });
  }
  // toggleTheme(): void {
  //   this.theme.toggleTheme();
  // }
  ngOnInit(): void {
   

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  // search(event:any){
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this.cartService.search.next(this.searchTerm);
  // }
  searchItem:any;
  searcher(){
    this.api.myData=this.searchItem;
    console.log( 'aaaaaaaaaaaaaaaaaaaaa'+this.api.myData)
  }
  backToProducts(){
    this.router.navigate(['products'])
  }
  getWishlistItemCount(): number {
    return this.wish.wishlist.length;
  }

}