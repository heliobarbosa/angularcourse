import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  propLegal = "qualquer"

  product: Product = {
    name:'',
    price:0.0
  }

  constructor(private productService:ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  fazerAlgo():void{
    console.log( "Fazendo algo!");
  }

  createProduct():void{
    
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage("Produto criado!");
      this.router.navigate(["/products"])
    });

    
  }

  cancel():void{
    this.router.navigate(["/products"])
  }
}
