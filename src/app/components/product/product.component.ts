import { Component } from '@angular/core';
import { Product } from 'src/app/modal/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  private webSocket: WebSocket;
  products:Product[];

  constructor(
    private productService: ProductService
  ) {
    this.webSocket = new WebSocket('ws://localhost:8080/dashboard/websocket');
      productService.list().subscribe(response=>{
          this.products = response;
      });
      this.webSocket.onmessage = (event) => {
        //  alert(JSON.parse(event.data));
    
          const dete=JSON.parse(event.data);
          this.products = dete.data;
        };
   }

  ngOnInit() {
    
  }

}
