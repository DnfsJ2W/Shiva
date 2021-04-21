import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../country-service.service';
import { FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

  country: any;

  constructor(private _countryService:CountryServiceService) { }

  public term:any =new FormControl();

  ngOnInit() {

    this.term.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe((searchText:any)=>{
      this._countryService.getSearchedCountry(searchText).subscribe((result)=>{
        console.log(result);
        this.country =result;
      })
    })
  }

}
