import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDefaultComponent } from './e-default.component';

describe('EDefaultComponent', () => {
  let component: EDefaultComponent;
  let fixture: ComponentFixture<EDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
