import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeDrawerComponent } from './code-drawer.component';

describe('CodeDrawerComponent', () => {
  let component: CodeDrawerComponent;
  let fixture: ComponentFixture<CodeDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
