import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex2Ttc } from './ex2-ttc';

describe('Ex2Ttc', () => {
  let component: Ex2Ttc;
  let fixture: ComponentFixture<Ex2Ttc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex2Ttc],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex2Ttc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
