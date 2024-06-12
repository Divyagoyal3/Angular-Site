// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class WishlistService {
//   // itemList: any;
//   // productList: any;

//   // constructor() { }
//   // addtoWishlist(product:any){
//   //   this.itemList.push(product);
//   //   this.productList.next(this.itemList)
//   // }
//   // getProduct(){
//   //   return this.productList.asObservable();
//   // }
//   // setProduct(product : any){
//   //   this.itemList.push(...product);
//   //   this.productList.next(product);
//   // }
//   // removeWishlistItem(product: any){
//   //   this.itemList.map((a:any, index:any)=>{
//   //     if(product.id=== a.id){
//   //       this.itemList.splice(index,1);
//   //     }
//   //   })
//   //   this.productList.next(this.itemList);
//   // }
//   private wishlistItems: any[] = [];
//   private wishlist: Set<string> = new Set<string>();
//   public cartItemList : any =[]
//   public productList = new BehaviorSubject<any>([]);
//   getProducts(){
//     return this.productList.asObservable();
//   }

//   setProduct(product : any){
//     this.cartItemList.push(...product);
//     this.productList.next(product);
//   }
//   addtoWishlist(product : any){
//     this.cartItemList.push(product);
//     this.productList.next(this.cartItemList);
//     console.log('ccccmmm'+this.cartItemList.value)
//   }
//   // addtoWishlist(product: any) {
//   //   if (!this.wishlist.has(product.id)) {
//   //     this.wishlist.add(product.id);
//   //     this.wishlistItems.push(product);
//   //     console.log('Item added to wishlist:', product);
//   //   } else {
//   //     // Item already in wishlist, do nothing or you can remove it if needed
//   //     console.log('Item already in wishlist:', product);
//   //   }
//   // }
  

//   isWishlisted(itemId: string): boolean {
//     return this.wishlist.has(itemId);
//   }

//   toggleWishlist(itemId: string): void {
//     if (this.wishlist.has(itemId)) {
//       this.wishlist.delete(itemId);
//     } else {
//       this.wishlist.add(itemId);
//     }
//   }

//   // constructor() { }

//   // addToWishlist(item: any) {
//   //   if (!this.isInWishlist(item)) {
//   //     this.wishlistItems.push(item);
//   //   }
//   // }

//   // removeFromWishlist(item: any) {
//   //   const index = this.wishlistItems.findIndex(i => i.id === item.id);
//   //   if (index !== -1) {
//   //     this.wishlistItems.splice(index, 1);
//   //   }
//   // }
//   removeFromWishlist(product: any){
//     this.cartItemList.map((a:any, index:any)=>{
//       if(product.id=== a.id){
//         this.cartItemList.splice(index,1);
//       }
//     })
//     this.productList.next(this.cartItemList);
//   }

//   isInWishlist(item: any): boolean {
//     return this.wishlistItems.some(i => i.id === item.id);
//   }

//   getWishlistItems(): any[] {
//     return this.wishlistItems;
//   }
// }
// wishlist.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist: any[] = [];
  totalForHeader:any;
  constructor(){console.log(this.totalForHeader+"88888")}
  addToWishlist(product: any) {
    this.wishlist.push(product);
  }

  removeFromWishlist(productId: any) {
    this.wishlist = this.wishlist.filter(item => item.id !== productId);
  }

  isWishlisted(productId: any): boolean {
    return this.wishlist.some(item => item.id === productId);
  }

  getWishlist() {
    return this.wishlist;
  }
}

