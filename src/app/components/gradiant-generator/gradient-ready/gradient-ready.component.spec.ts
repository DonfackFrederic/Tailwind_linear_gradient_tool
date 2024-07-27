import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientReadyComponent } from './gradient-ready.component';

describe('GradientReadyComponent', () => {
  let component: GradientReadyComponent;
  let fixture: ComponentFixture<GradientReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientReadyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradientReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
