import { TestBed, inject } from '@angular/core/testing';

import { GlobalServicesService } from './global-services.service';

describe('GlobalServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalServicesService]
    });
  });

  it('should be created', inject([GlobalServicesService], (service: GlobalServicesService) => {
    expect(service).toBeTruthy();
  }));
});
