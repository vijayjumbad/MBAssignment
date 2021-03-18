import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnoneComponent } from './columnone.component';

describe('ColumnoneComponent', () => {
  let component: ColumnoneComponent;
  let fixture: ComponentFixture<ColumnoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
