import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyKitComponent } from './company-kit.component';

describe('CompanyKitComponent', () => {
  let component: CompanyKitComponent;
  let fixture: ComponentFixture<CompanyKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyKitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
