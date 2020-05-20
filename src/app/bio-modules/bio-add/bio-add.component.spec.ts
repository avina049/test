import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAddComponent } from './bio-add.component';

describe('BioAddComponent', () => {
  let component: BioAddComponent;
  let fixture: ComponentFixture<BioAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
