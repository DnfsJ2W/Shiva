import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../country-service.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  country: any;
  constructor(private _countryService:CountryServiceService) { }

  ngOnInit(): void {
  }
  public searchCountryUsingPromise(keyWord:any){

        this._countryService.getSearchedCountry(keyWord).toPromise()
        .then((data:any) =>{
          console.log(data);
          this.country =data;
        });
        }
}
