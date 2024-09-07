import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponsiveComponent } from "./responsive/responsive.component";

import { Jobcard2Component } from "./jobcard2/jobcard2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResponsiveComponent, Jobcard2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smartApp';
}
