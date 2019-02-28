import { TestBed } from '@angular/core/testing';

import { EtherServiceService } from './ether-service.service';

describe('EtherServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtherServiceService = TestBed.get(EtherServiceService);
    expect(service).toBeTruthy();
  });
});
