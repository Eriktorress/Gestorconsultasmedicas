import { TestBed } from '@angular/core/testing';

import { DbconsultaService } from './dbconsulta.service';

describe('DbconsultaService', () => {
  let service: DbconsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbconsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
