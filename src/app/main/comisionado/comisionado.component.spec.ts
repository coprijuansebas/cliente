import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionadoComponent } from './comisionado.component';

describe('ComisionadoComponent', () => {
  let component: ComisionadoComponent;
  let fixture: ComponentFixture<ComisionadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComisionadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
