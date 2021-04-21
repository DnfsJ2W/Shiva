import { TestBed } from '@angular/core/testing';

import { Country.Service.TsService } from './country.service.ts.service';

describe('Country.Service.TsService', () => {
  let service: Country.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Country.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
