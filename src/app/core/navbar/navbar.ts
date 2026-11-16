import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // Ajouter une entrée ici = ajouter un lien dans la navbar
  links = [
    { path: '/ex1', label: 'Ex 1 · Div coloré' },
    { path: '/ex2', label: 'Ex 2 · TTC' },
    // { path: '/cv', label: 'Ex 3/5 · CvTech' },
    // { path: '/mini-word', label: 'Ex 4 · Mini Word' },
    // { path: '/rainbow', label: 'Ex 6 · Arc-en-ciel' },
    // { path: '/todo', label: 'Ex 7 · Todo' },
    // { path: '/week-todo', label: 'Ex 8 · WeekTodo' },
    // { path: '/embauche', label: 'Ex 9 · Embauche' },
  ];
}