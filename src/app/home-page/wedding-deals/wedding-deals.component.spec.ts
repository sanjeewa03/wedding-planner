import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingDealsComponent } from './wedding-deals.component';

describe('WeddingDealsComponent', () => {
  let component: WeddingDealsComponent;
  let fixture: ComponentFixture<WeddingDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
