import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntityTypeComponent } from './list-entity-type.component';

describe('ListEntityTypeComponent', () => {
  let component: ListEntityTypeComponent;
  let fixture: ComponentFixture<ListEntityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEntityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
