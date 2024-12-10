import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { CommonModule } from '@angular/common';
import {JsonPipe} from '@angular/common';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
//import { Modal } from 'flowbite'
//import type { ModalOptions, ModalInterface } from 'flowbite'

@Component({
  selector: 'app-reporteador',
  standalone: true,
  imports: [CdkDrag,EncabezadoComponent,CommonModule,FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reporteador.component.html',
  styleUrl: './reporteador.component.css'
})
export default class ReporteadorComponent {

infoAlumnoCkd:boolean=false;

 // Estado de la información del alumno
 isChecked = false;
 infoAlumno = false;
 positions: { [key: string]: { x: number, y: number } } = {};



 // Actualiza la posición del elemento cuando se detiene el drag
 updatePosition(id: string, event: CdkDragEnd) {
   const { x, y } = event.source.getFreeDragPosition();
   this.positions[id] = { x, y };
 }

 // Guarda las posiciones en JSON (en este caso, mostramos el JSON en la consola)
 savePositions() {
   const jsonPositions = JSON.stringify(this.positions, null, 2);
   console.log('Posiciones guardadas:', jsonPositions);

   // Si quieres descargar el JSON como archivo (opcional)
   const blob = new Blob([jsonPositions], { type: 'application/json' });
   const url = window.URL.createObjectURL(blob);
   const a = document.createElement('a');
   a.href = url;
   a.download = 'positions.json';
   a.click();
   window.URL.revokeObjectURL(url);
 }
private readonly _formBuilder = inject(FormBuilder);

readonly toppings = this._formBuilder.group({
  pepperoni: false,
  extracheese: false,
  mushroom: false,
});
dibujaInfo(): void{
  if (this.isChecked) {
    this.infoAlumno=true;
  }
    
  
   
  

}
}
