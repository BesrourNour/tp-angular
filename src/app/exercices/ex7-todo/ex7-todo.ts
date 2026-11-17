import { Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-ex7-todo',
  imports: [FormsModule],
  // Un service par composant : chaque instance de <app-ex7-todo> a sa propre liste.
  providers: [TodoService],
  templateUrl: './ex7-todo.html',
  styleUrl: './ex7-todo.css',
})
export class Ex7Todo {
  // Titre affiché au-dessus du formulaire (l'Ex 8 y met le jour de la semaine).
  title = input('Ex 7 · Todo');

  private readonly todoService = inject(TodoService);

  // Liste fournie par le service (signal en lecture seule).
  readonly todos = this.todoService.getTodos();

  // Nombre de todos : signal dérivé, se met à jour tout seul quand la liste change.
  readonly count = computed(() => this.todos().length);

  // Champs du formulaire en signals (liés avec [(ngModel)]).
  readonly name = signal('');
  readonly content = signal('');

  addTodo() {
    if (!this.name().trim()) return; // un todo sans nom n'a pas de sens
    this.todoService.addTodo(new Todo(this.name(), this.content()));
    this.name.set('');
    this.content.set('');
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
