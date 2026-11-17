import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex7Todo } from './ex7-todo';

describe('Ex7Todo', () => {
  let fixture: ComponentFixture<Ex7Todo>;
  let component: Ex7Todo;

  beforeEach(async () => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
    await TestBed.configureTestingModule({ imports: [Ex7Todo] }).compileComponents();
    fixture = TestBed.createComponent(Ex7Todo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds then deletes a todo', async () => {
    component.name.set('Courses');
    component.content.set('Lait');
    component.addTodo();
    await fixture.whenStable();
    expect(component.todos().length).toBe(1);
    expect(fixture.nativeElement.textContent).toContain('Courses');
    expect(component.name()).toBe('');
    expect(component.count()).toBe(1);

    component.deleteTodo(component.todos()[0]);
    await fixture.whenStable();
    expect(component.todos().length).toBe(0);
  });

  it('ignores a todo without name', () => {
    component.name.set('   ');
    component.addTodo();
    expect(component.todos().length).toBe(0);
  });
});
