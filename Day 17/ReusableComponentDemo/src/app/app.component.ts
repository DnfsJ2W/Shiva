import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;// = 'ReusableComponentDemo';
  isFavorite:any;
  post={
    title: "ReusableComponentDemo",
    isFavorite: true
  }
  onFavoriteChanged(){
    this.isFavorite = !this.isFavorite;
    console.log('Favorite Changed')
  }

}
