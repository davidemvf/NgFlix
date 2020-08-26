import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieTvComponent } from './serie-tv.component';

describe('SerieTvComponent', () => {
  let component: SerieTvComponent;
  let fixture: ComponentFixture<SerieTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
