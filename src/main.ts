import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { HeaderComponent } from './header/header.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <app-counter></app-counter>
  `,
  imports: [HeaderComponent, CounterComponent],
})
export class App {}

bootstrapApplication(App);
