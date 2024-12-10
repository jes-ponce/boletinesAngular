import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposFormativosComponent } from './campos-formativos.component';

describe('CamposFormativosComponent', () => {
  let component: CamposFormativosComponent;
  let fixture: ComponentFixture<CamposFormativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamposFormativosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamposFormativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
