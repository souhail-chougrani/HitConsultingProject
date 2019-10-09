import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenerURLComponent } from './shortener-url.component';

describe('ShortenerURLComponent', () => {
  let component: ShortenerURLComponent;
  let fixture: ComponentFixture<ShortenerURLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenerURLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenerURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
