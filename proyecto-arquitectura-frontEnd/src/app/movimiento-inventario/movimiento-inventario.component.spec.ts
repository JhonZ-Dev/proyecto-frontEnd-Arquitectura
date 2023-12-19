import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoInventarioComponent } from './movimiento-inventario.component';

describe('MovimientoInventarioComponent', () => {
  let component: MovimientoInventarioComponent;
  let fixture: ComponentFixture<MovimientoInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimientoInventarioComponent]
    });
    fixture = TestBed.createComponent(MovimientoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
