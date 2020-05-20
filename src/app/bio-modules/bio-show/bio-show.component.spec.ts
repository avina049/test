import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioShowComponent } from './bio-show.component';

describe('BioShowComponent', () => {
  let component: BioShowComponent;
  let fixture: ComponentFixture<BioShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
