import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import DragndropComponent from './componentes/dragndrop/dragndrop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DragndropComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reporteador';
}
