// sala-componente.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala-componente',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="mensajes.length > 0">
      <h4>Mensajes guardados:</h4>
      <ul>
        <li *ngFor="let msg of mensajes">
          <strong>{{ msg.usuario }}:</strong> {{ msg.mensaje }}
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class SalaComponenteComponent {
  @Input() mensajes: {usuario: string, mensaje: string}[] = [];
}
