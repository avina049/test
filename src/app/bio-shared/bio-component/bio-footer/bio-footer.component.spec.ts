import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioFooterComponent } from './bio-footer.component';

describe('BioFooterComponent', () => {
  let component: BioFooterComponent;
  let fixture: ComponentFixture<BioFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
