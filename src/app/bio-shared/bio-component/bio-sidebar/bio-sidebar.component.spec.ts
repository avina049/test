import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioSidebarComponent } from './bio-sidebar.component';

describe('BioSidebarComponent', () => {
  let component: BioSidebarComponent;
  let fixture: ComponentFixture<BioSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
