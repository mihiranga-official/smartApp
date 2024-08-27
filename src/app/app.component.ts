import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponsiveComponent } from "./responsive/responsive.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResponsiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smartApp';
}
