import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryPopupComponent } from './industry-popup.component';

describe('IndustryPopupComponent', () => {
  let component: IndustryPopupComponent;
  let fixture: ComponentFixture<IndustryPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
