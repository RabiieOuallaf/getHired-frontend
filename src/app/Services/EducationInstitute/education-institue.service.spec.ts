import { TestBed } from '@angular/core/testing';

import { EducationInstituteService } from './education-institute.service';

describe('EducationInstitueService', () => {
  let service: EducationInstituteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationInstituteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
