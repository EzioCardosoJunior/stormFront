import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoUcsComponent } from './gestao-ucs.component';

describe('GestaoUcsComponent', () => {
  let component: GestaoUcsComponent;
  let fixture: ComponentFixture<GestaoUcsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestaoUcsComponent]
    });
    fixture = TestBed.createComponent(GestaoUcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
