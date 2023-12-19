import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarCategoriasComponent } from './guardar-categorias.component';

describe('GuardarCategoriasComponent', () => {
  let component: GuardarCategoriasComponent;
  let fixture: ComponentFixture<GuardarCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarCategoriasComponent]
    });
    fixture = TestBed.createComponent(GuardarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
