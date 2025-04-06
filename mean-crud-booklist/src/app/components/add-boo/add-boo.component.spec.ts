import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBooComponent } from './add-boo.component';

describe('AddBooComponent', () => {
  let component: AddBooComponent;
  let fixture: ComponentFixture<AddBooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBooComponent]
    });
    fixture = TestBed.createComponent(AddBooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
