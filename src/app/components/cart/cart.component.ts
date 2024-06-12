import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }
  isDarkTheme: Observable<boolean> | undefined;

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any) {
    if (item.quantity > 1) {
      item.quantity--; 
    } else {
      this.cartService.removeCartItem(item);
    }
  }
  
  
  emptycart(){
    this.cartService.removeAllCart();
  }

}