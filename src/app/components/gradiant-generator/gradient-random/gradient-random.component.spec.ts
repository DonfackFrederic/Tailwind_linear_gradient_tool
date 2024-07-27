import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientRandomComponent } from './gradient-random.component';

describe('GradientRandomComponent', () => {
  let component: GradientRandomComponent;
  let fixture: ComponentFixture<GradientRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientRandomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradientRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
