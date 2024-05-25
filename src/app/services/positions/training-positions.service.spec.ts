import { TestBed } from '@angular/core/testing';

import { TrainingPositionsService } from './training-positions.service';

describe('TrainingPositionsService', () => {
  let service: TrainingPositionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingPositionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
