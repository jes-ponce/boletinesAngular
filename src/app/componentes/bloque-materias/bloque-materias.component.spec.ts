import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueMateriasComponent } from './bloque-materias.component';

describe('BloqueMateriasComponent', () => {
  let component: BloqueMateriasComponent;
  let fixture: ComponentFixture<BloqueMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloqueMateriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloqueMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
