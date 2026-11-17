import { TestBed } from '@angular/core/testing';
import { Ex8WeekTodo } from './ex8-week-todo';
import { Ex7Todo } from '../ex7-todo/ex7-todo';
import { By } from '@angular/platform-browser';

describe('Ex8WeekTodo', () => {
  beforeEach(async () => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
    await TestBed.configureTestingModule({ imports: [Ex8WeekTodo] }).compileComponents();
  });

  it('renders 5 todo components with independent lists', async () => {
    const fixture = TestBed.createComponent(Ex8WeekTodo);
    await fixture.whenStable();
    const todos = fixture.debugElement
      .queryAll(By.directive(Ex7Todo))
      .map((d) => d.componentInstance as Ex7Todo);
    expect(todos.length).toBe(5);

    todos[0].name.set('Lundi todo');
    todos[0].addTodo();
    expect(todos[0].todos().length).toBe(1);
    expect(todos[1].todos().length).toBe(0); // liste indépendante
  });
});
