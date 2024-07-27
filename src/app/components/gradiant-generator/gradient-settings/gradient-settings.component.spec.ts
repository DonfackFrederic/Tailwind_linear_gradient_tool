import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientSettingsComponent } from './gradient-settings.component';

describe('GradientSettingsComponent', () => {
  let component: GradientSettingsComponent;
  let fixture: ComponentFixture<GradientSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradientSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
