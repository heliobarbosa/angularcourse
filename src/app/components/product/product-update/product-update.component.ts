import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name:'',
    price:0.0
  }

  constructor(private productService:ProductService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log('meu id: '  + id);
    this.productService.readById(id||'').subscribe(product=>{
      this.product = product
    })
  }

  cancel():void{
    this.router.navigate(["/products"])
  }

  updateProduct():void{
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMessage("Produto alterado!");
      this.router.navigate(["/products"])
    });
  }

}