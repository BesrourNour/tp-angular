import { TodoService } from './todo.service';
import { Todo } from '../models/todo';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService();
    vi.spyOn(console, 'log').mockImplementation(() => {});
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

  it('logs the todos', () => {
    service.addTodo(new Todo('a', 'b'));
    service.logTodos();
    expect(console.log).toHaveBeenCalled();
  });
});
