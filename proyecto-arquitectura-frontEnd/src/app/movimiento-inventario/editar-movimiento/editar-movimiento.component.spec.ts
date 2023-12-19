import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMovimientoComponent } from './editar-movimiento.component';

describe('EditarMovimientoComponent', () => {
  let component: EditarMovimientoComponent;
  let fixture: ComponentFixture<EditarMovimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMovimientoComponent]
    });
    fixture = TestBed.createComponent(EditarMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
