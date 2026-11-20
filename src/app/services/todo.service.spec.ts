import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { Todo } from '../models/todo';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
    TestBed.configureTestingModule({ providers: [TodoService] });
    service = TestBed.inject(TodoService);
  });

  it('starts with an empty list', () => {
    expect(service.getTodos()()).toEqual([]);
  });

  it('adds a todo', () => {
    const todo = new Todo('a', 'b');
    service.addTodo(todo);
    expect(service.getTodos()()).toEqual([todo]);
  });

  it('deletes a todo', () => {
    const t1 = new Todo('a', 'b');
    const t2 = new Todo('c', 'd');
    service.addTodo(t1);
    service.addTodo(t2);
    service.deleteTodo(t1);
    expect(service.getTodos()()).toEqual([t2]);
  });

  it('logs the todos automatically (effect) when the list changes', () => {
    TestBed.tick();
    vi.mocked(console.log).mockClear();

    service.addTodo(new Todo('a', 'b'));
    TestBed.tick();

    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it('logTodos logs on demand', () => {
    service.logTodos();
    expect(console.log).toHaveBeenCalled();
  });
});