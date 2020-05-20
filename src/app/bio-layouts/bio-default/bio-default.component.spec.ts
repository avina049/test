import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioDefaultComponent } from './bio-default.component';

describe('BioDefaultComponent', () => {
  let component: BioDefaultComponent;
  let fixture: ComponentFixture<BioDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
