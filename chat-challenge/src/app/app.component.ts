// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalaComponenteComponent } from './sala-componente/sala-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, SalaComponenteComponent],
  template: `
    <div class="chat-room">
      <div class="chat-title">
        <h2>Sala de Chat</h2>
      </div>
      <h3>Conversación</h3>
      <div class="conversation">
        <div class="user-message">
          <div class="user-name">Usuario: Pepe</div>
          <textarea [(ngModel)]="mensajePepe" placeholder="Mensaje"></textarea>
          <button (click)="guardarMensaje('Pepe', mensajePepe)">Guardar</button>
        </div>
        <div class="user-message">
          <div class="user-name">Usuario: María</div>
          <textarea [(ngModel)]="mensajeMaria" placeholder="Mensaje"></textarea>
          <button (click)="guardarMensaje('María', mensajeMaria)">Guardar</button>
        </div>
      </div>
      <app-sala-componente [mensajes]="mensajesGuardados"></app-sala-componente>
    </div>
  `,
  styles: [`
    .chat-room {
      border: 2px solid #007bff;
      border-radius: 5px;
      padding: 10px;
      font-family: Arial, sans-serif;
    }
    .chat-title {
      background-color: #f8f9fa;
      padding: 10px;
      margin-bottom: 10px;
    }
    .conversation {
      display: flex;
      gap: 20px;
    }
    .user-message {
      flex: 1;
      border: 1px solid #28a745;
      border-radius: 5px;
      padding: 10px;
    }
    .user-name {
      font-weight: bold;
      margin-bottom: 10px;
    }
    textarea {
      width: 100%;
      height: 100px;
      margin-bottom: 10px;
    }
    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }
  `]
})
export class AppComponent {
  mensajePepe = '';
  mensajeMaria = '';
  mensajesGuardados: {usuario: string, mensaje: string}[] = [];

  guardarMensaje(usuario: string, mensaje: string) {
    if (mensaje.trim()) {
      this.mensajesGuardados.push({usuario, mensaje});
      if (usuario === 'Pepe') {
        this.mensajePepe = '';
      } else {
        this.mensajeMaria = '';
      }
    }
  }
}