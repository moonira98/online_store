import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildKitComponent } from './build-kit.component';

describe('BuildKitComponent', () => {
  let component: BuildKitComponent;
  let fixture: ComponentFixture<BuildKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildKitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
