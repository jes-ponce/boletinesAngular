import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteadorComponent } from './reporteador.component';

describe('ReporteadorComponent', () => {
  let component: ReporteadorComponent;
  let fixture: ComponentFixture<ReporteadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
