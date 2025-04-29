import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Mini Blog (Standalone SSR)</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
