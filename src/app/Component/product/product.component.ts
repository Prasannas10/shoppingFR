import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product.model';
import { ShareService } from 'src/app/Services/share.service';
import { NavbarServiceService } from 'src/app/Services/navbar-service.service';
import { FooterService } from 'src/app/Services/footer.service';
import Cart from 'src/app/Models/cart.model';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 public products: Product[] ;
 
  constructor(private service:ShareService,private nav :NavbarServiceService ,private fs :FooterService) { }

  ngOnInit(): void {
    this.refreshProductList();
    this.nav.show();
    //this.nav.hide();
    this.nav.doSomethingElseUseful();
    this.fs.show();
    this.fs.doSomethingElseUseful(); 
  }
  refreshProductList(){
    this.service.GetAllProduct().subscribe(data=>{
      this.products=data;
      console.log(this.products)
    });
  }
  getQuantity(index: number): number {
    const quantityTextbox = document.getElementById(`qty-${index}`) as HTMLInputElement;
    const value = parseInt(quantityTextbox.value);
    
    if (isNaN(value) || value < 1) {
      return 1; // Return default quantity of 1 if value is invalid or below 1
    }
    return value; 
  }
  addToCart(products:Product, qty:number){
    
    if ( qty <= products.quantity) {
      console.log(products.prName,qty);
      this.service.addToCart(products,qty).subscribe(val=>{
        
      });
      alert("Added to Cart!");
    } else {
      alert("Quantity exceeds the available quantity! Please select a lower quantity");
    }
   
    }
}
