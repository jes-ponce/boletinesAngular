import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectosComponent } from './aspectos.component';

describe('AspectosComponent', () => {
  let component: AspectosComponent;
  let fixture: ComponentFixture<AspectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AspectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
