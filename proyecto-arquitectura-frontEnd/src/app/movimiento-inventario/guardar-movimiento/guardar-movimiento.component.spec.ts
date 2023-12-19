import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarMovimientoComponent } from './guardar-movimiento.component';

describe('GuardarMovimientoComponent', () => {
  let component: GuardarMovimientoComponent;
  let fixture: ComponentFixture<GuardarMovimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarMovimientoComponent]
    });
    fixture = TestBed.createComponent(GuardarMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
