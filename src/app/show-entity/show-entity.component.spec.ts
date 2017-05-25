import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEntityComponent } from './show-entity.component';

describe('ShowEntityComponent', () => {
  let component: ShowEntityComponent;
  let fixture: ComponentFixture<ShowEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
