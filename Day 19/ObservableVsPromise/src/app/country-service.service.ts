import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {
  employees: any[''];
  private url = '';
  private baseUrl = "https://localhost:44350/";//Replace it with your http address and port

  constructor(public http: HttpClient) {
  }

    getSearchedCountry(keyWord: any) {

      this.url = this.baseUrl + 'api/Countries/GetSearchedCountry/'+keyWord;

      return this.http.get<any[]>(this.url);

    }
}
