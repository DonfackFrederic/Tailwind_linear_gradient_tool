import { TestBed } from '@angular/core/testing';

import { GradientGenaratorService } from './gradient-genarator.service';

describe('GradientGenaratorService', () => {
  let service: GradientGenaratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradientGenaratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
