import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  /* inputs: ['isFavourite'] */
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean=true;
  @Output() a = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isSelected = !this.isSelected;
    this.a.emit();
  }

}
