import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationInstitutePopupComponent } from './education-institute-popup.component';

describe('EducationInstitutePopupComponent', () => {
  let component: EducationInstitutePopupComponent;
  let fixture: ComponentFixture<EducationInstitutePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationInstitutePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationInstitutePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
