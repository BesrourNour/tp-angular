import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex1ColorDiv } from './ex1-color-div';

describe('Ex1ColorDiv', () => {
  let component: Ex1ColorDiv;
  let fixture: ComponentFixture<Ex1ColorDiv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex1ColorDiv],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex1ColorDiv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
