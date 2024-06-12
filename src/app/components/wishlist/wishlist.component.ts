import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { WishlistService } from '../../service/wishlist.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // products: any;
  wishlist: any[] = [];
  // totalItem: number;
  isDarkTheme: Observable<boolean> | undefined;

  constructor(private wish:WishlistService){
    this.wishlist = wish.getWishlist();
    console.log('--------------------------------->'+this.wishlist.length)
    // this.wish.totalForHeader=this.wishlist.length;
  }
  ngOnInit(){

  }
  // public productList:any;
  // ngOnInit(){
  //   this.wish.getProducts().subscribe(res=>{
  //     this.products=res;
  //     console.log('hhhhhhhhhhhhhhhhhhh'+res)
  //   })
  // }
  // removeItem(item: any){
  //   this.wish.removeCartItem(item);
  // }
}
