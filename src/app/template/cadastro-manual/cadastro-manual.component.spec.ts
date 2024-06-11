import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroManualComponent } from './cadastro-manual.component';

describe('CadastroManualComponent', () => {
  let component: CadastroManualComponent;
  let fixture: ComponentFixture<CadastroManualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroManualComponent]
    });
    fixture = TestBed.createComponent(CadastroManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
