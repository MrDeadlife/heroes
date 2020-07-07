import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadoComponent } from './buscado.component';

describe('BuscadoComponent', () => {
  let component: BuscadoComponent;
  let fixture: ComponentFixture<BuscadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
