import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
    selector: 'products',
    /* template: '<h2>{{ getTitle()  }}</h2>' */
    template: `
                <h3> {{ title }} <\h3>
                <ul>


                    <li *ngFor="let product of products">
                            {{ product }}
                    </li>
                </ul>

    `
})
export class ProductsComponent{
  title="List of Products";
  /* getTitle()
  {
    return this.title;
  }
  products = ["Pens","Books","Laptop","Speakers"]; */
  products;

    constructor()
    {
      let services = new ProductsService();
      this.products = services.getProducts();
    }
}

