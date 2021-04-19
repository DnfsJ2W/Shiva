import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import{FormsModule} from '@angular/forms';


@Component({
    selector: 'products',
    /* template: '<h2>{{ getTitle()  }}</h2>' */
    template: `
                <h3> {{ title }} </h3>
                <h3 [textContent]="title1"></h3>
                <ul>
                    <li *ngFor="let product of products">
                            {{ product }}
                    </li>
                </ul>
                <table border="1">
                <tr>
                    <td [colSpan]=colSpan>Hello</td>
                    <td></td>

                </tr>
                <tr>
                    <td>Name</td>
                    <td>Shiva</td>

                </tr>
                <tr>
                    <td>Designation</td>
                    <td>Software Engineer</td>

                </tr>
                <button class="btn btn-primary" [class.isActive]="isActive">Save</button><br/>
                <button [style.backgroundColor]="isActive ? 'blue' : 'white'"> Cancel </button>

            </table>
            <button (click)="onSave1($event)">Save</button><br/>
            <div>
              <button (click)="onSave()">Save</button>
            </div><br/>
            <input (keyup)="onKeyUp1($event)" /><br/>
            <input (keyup.enter)="onKeyUp2()" /><br/>
            <input (keyup.enter)="onKeyUp3($event)" /><br/>


            <input #shiva (keyup.enter)="onKeyUp4(shiva.value)" />


            <input [value]="email" (keyup.enter)="onKeyUp5()" /><br/>
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp5()" /><br/>
            {{ description | summary }}<br/>

<img src="{{ imageUrl1 }}" height=160 width=240 /><br/>
<img [src]="imageUrl1" height=160 width=240/><br/>
`
})
export class ProductsComponent{
  title="List of Products";
  title1="List of Images";
  imageUrl = "http://lorempixel.com/400/200";
  imageUrl1="../assets/IMG-20190611-WA0008_2 (1).jpg";

  colSpan=2;
  isActive=false;
  onSave(){
    console.log("Button is clicked");
  }
  onDivClicked(){
    console.log("Div is clicked");
  }

  onSave1($event: any){
    $event.stopPropagation();
    console.log("Button is clicked", $event);
  }
  onKeyUp1($event:any){
    if($event.keyCode === 13 )
       console.log("Enter was pressed");
  }
  onKeyUp2(){
    console.log("Enter was pressed");
  }
  onKeyUp3($event:any){
  console.log($event.target.value);
  }
  onKeyUp4(shiva:any){
  console.log(shiva);
  }
  email= "me@example.com";

  onKeyUp5(){
         console.log(this.email);
  }
  description= `
  The expandable Inspiron Small Desktop has been reimagined to enhance the enjoyment that comes with owning a Dell desktop.

Small and mighty: Revolutionary design saves space without compromising system performance, and features multiple expansion slots for future upgrades.

Easy access: Optical drive, USB 3.1 Gen 1 Type-A ports and 5-in-1 media card reader are all conveniently located up front for easy accessibility.
  `


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

