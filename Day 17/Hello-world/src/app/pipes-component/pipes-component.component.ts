import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  template: `{{ description | summary:30 }}<br/>
  {{ product.title | uppercase }} <br/>
  {{ product.rating }} <br/>
  {{ product.price }} <br/>
  {{ product.description }} <br/>
  {{ product.mfgdate }} <br/><br/>

  {{ product.title | uppercase | lowercase}} <br/>
               {{ product.rating | number:'1.2-2' }} <br/>
               {{ product.rating | number:'1.1-1' }} <br/>
               {{ product.rating | number:'2.1-1' }} <br/>
               {{ product.price | currency }} <br/>
               {{ product.price | currency : 'AUD' }} <br/>
               {{ product.price | currency : 'AUD' : true}} <br/>
               {{ product.price | currency : 'AUD' : true : '3.2-2'}} <br/>
               {{ product.description }} <br/>
               {{ product.mfgdate }} <br/>
               {{ product.mfgdate | date: 'shortDate' }}


`,
  styleUrls: ['./pipes-component.component.css']
})
export class PipesComponentComponent  {

  product ={
    title: "Laptop",
    rating: 4.9,
    price: 55000,
    description: "sdfdsfdfs",
    mfgdate: new Date(2020,3,1)
  }
  description= `
  The expandable Inspiron Small Desktop has been reimagined to enhance the enjoyment that comes with owning a Dell desktop.

Small and mighty: Revolutionary design saves space without compromising system performance, and features multiple expansion slots for future upgrades.

Easy access: Optical drive, USB 3.1 Gen 1 Type-A ports and 5-in-1 media card reader are all conveniently located up front for easy accessibility.
  `

}
