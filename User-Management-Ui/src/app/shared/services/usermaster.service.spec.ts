import { TestBed, inject } from '@angular/core/testing';

import { UsermasterService } from './usermaster.service';

describe('UsermasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsermasterService]
    });
  });

  it('should be created', inject([UsermasterService], (service: UsermasterService) => {
    expect(service).toBeTruthy();
  }));
});
