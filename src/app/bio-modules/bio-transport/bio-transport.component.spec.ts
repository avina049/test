import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioTransportComponent } from './bio-transport.component';

describe('BioTransportComponent', () => {
  let component: BioTransportComponent;
  let fixture: ComponentFixture<BioTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
