import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFeildComponent } from './text-feild.component';

describe('TextFeildComponent', () => {
  let component: TextFeildComponent;
  let fixture: ComponentFixture<TextFeildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFeildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFeildComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
