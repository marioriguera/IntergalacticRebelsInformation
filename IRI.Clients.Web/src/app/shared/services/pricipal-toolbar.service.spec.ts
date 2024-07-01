/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PricipalToolbarService } from './pricipal-toolbar.service';

describe('Service: PricipalToolbar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricipalToolbarService]
    });
  });

  it('should ...', inject([PricipalToolbarService], (service: PricipalToolbarService) => {
    expect(service).toBeTruthy();
  }));
});
