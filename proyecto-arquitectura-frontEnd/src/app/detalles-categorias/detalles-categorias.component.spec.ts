import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCategoriasComponent } from './detalles-categorias.component';

describe('DetallesCategoriasComponent', () => {
  let component: DetallesCategoriasComponent;
  let fixture: ComponentFixture<DetallesCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesCategoriasComponent]
    });
    fixture = TestBed.createComponent(DetallesCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
