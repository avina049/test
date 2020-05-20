import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioPopupComponent } from './bio-popup.component';

describe('BioPopupComponent', () => {
  let component: BioPopupComponent;
  let fixture: ComponentFixture<BioPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
