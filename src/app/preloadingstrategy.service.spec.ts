import { TestBed } from '@angular/core/testing';

import { PreloadingstrategyService } from './preloadingstrategy.service';

describe('PreloadingstrategyService', () => {
  let service: PreloadingstrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadingstrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
