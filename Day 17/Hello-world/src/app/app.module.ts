import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { EmailService } from './email.service';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

import { FormsModule } from '@angular/forms';
import { PipesComponentComponent } from './pipes-component/pipes-component.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CourseComponent,
    PipesComponentComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProductsService,
    EmailService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
