import { TestBed } from '@angular/core/testing';

import { WeddingDealsService } from './wedding-deals.service';

describe('WeddingDealsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeddingDealsService = TestBed.get(WeddingDealsService);
    expect(service).toBeTruthy();
  });
});
