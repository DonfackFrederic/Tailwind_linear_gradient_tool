import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientCustumComponent } from './gradient-custum.component';

describe('GradientCustumComponent', () => {
  let component: GradientCustumComponent;
  let fixture: ComponentFixture<GradientCustumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientCustumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradientCustumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
