import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEntryFormComponent } from './product-entry-form.component';

describe('ProductEntryFormComponent', () => {
  let component: ProductEntryFormComponent;
  let fixture: ComponentFixture<ProductEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEntryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
