import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAFInterfaceComponent } from './daf-interface.component';

describe('DAFInterfaceComponent', () => {
  let component: DAFInterfaceComponent;
  let fixture: ComponentFixture<DAFInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DAFInterfaceComponent]
    });
    fixture = TestBed.createComponent(DAFInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
