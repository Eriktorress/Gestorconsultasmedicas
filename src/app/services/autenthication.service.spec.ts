import { TestBed } from '@angular/core/testing';

import { AutenthicationService } from './autenthication.service';

describe('AutenthicationService', () => {
  let service: AutenthicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenthicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
