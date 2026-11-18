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
    { path: '/ex1', label: 'Div coloré' },
    { path: '/ex2', label: 'TTC' },
    { path: '/cv', label: 'CvTech' },
    { path: '/mini-word', label: 'Mini Word' },
   { path: '/rainbow', label: 'Arc-en-ciel' },
     { path: '/todo', label: 'Todo' },
    { path: '/week-todo', label: 'WeekTodo' },
  ];
}