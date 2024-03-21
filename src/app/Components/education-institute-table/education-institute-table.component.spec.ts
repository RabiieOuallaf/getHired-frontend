import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationInstituteTableComponent } from './education-institute-table.component';

describe('EducationInstituteTableComponent', () => {
  let component: EducationInstituteTableComponent;
  let fixture: ComponentFixture<EducationInstituteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationInstituteTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationInstituteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
