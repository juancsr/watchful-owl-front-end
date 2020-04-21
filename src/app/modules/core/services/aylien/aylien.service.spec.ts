import { TestBed } from '@angular/core/testing';

import { AylienService } from './aylien.service';

describe('AylienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AylienService = TestBed.get(AylienService);
    expect(service).toBeTruthy();
  });
});
