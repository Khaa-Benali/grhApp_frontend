import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhInterfaceComponent } from './rh-interface.component';

describe('RhInterfaceComponent', () => {
  let component: RhInterfaceComponent;
  let fixture: ComponentFixture<RhInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RhInterfaceComponent]
    });
    fixture = TestBed.createComponent(RhInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
