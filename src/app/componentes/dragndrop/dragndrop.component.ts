import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragndrop',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './dragndrop.component.html',
  styleUrl: './dragndrop.component.css'
})
export default class DragndropComponent {

}
