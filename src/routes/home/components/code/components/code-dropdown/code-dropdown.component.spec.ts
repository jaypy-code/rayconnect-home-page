import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeDropdownComponent } from './code-dropdown.component';

describe('CodeDropdownComponent', () => {
  let component: CodeDropdownComponent;
  let fixture: ComponentFixture<CodeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
