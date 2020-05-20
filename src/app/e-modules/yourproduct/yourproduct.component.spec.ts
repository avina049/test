import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourproductComponent } from './yourproduct.component';

describe('YourproductComponent', () => {
  let component: YourproductComponent;
  let fixture: ComponentFixture<YourproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
