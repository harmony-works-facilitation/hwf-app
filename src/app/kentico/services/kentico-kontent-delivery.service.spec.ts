import { TestBed } from '@angular/core/testing';

import { KenticoKontentDeliveryService } from './kentico-kontent-delivery.service';

describe('KenticoKontentDeliveryService', () => {
  let service: KenticoKontentDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KenticoKontentDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
