import { TestBed } from '@angular/core/testing';

import { ProgramacionesService } from './programaciones.service';

describe('ProgramacionesService', () => {
  let service: ProgramacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
