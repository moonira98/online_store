import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertCatalogComponent } from './dessert-catalog.component';

describe('DessertCatalogComponent', () => {
  let component: DessertCatalogComponent;
  let fixture: ComponentFixture<DessertCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DessertCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
