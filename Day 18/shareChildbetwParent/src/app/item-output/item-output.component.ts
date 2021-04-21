import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent implements OnInit {
  currentItem = 'Television';
  constructor() { }

  ngOnInit(): void {
  }

}
