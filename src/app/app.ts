import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/navbar/navbar';
import { Footer } from './core/footer/footer';

@Component({ // composant principal de l'application
  selector: 'app-root', // définit le nom de la balise HTML
  imports: [RouterOutlet, Navbar, Footer], // RouterOutlet affiche le composant correspondant à la route active 
  templateUrl: './app.html',
})
export class App {}