import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngFor
import { FormsModule } from '@angular/forms'; // Importante para ngModel
import { UsuariosService } from './usuarios.service';
@Component({
  selector: 'app-root',
  standalone: true, // Angular moderno
  imports: [CommonModule, FormsModule], 
  template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Lista de Usuarios</h1>
      <ul>
        <li *ngFor="let u of usuarios">
          {{ u.id }} - <strong>{{ u.nombre }}</strong> ({{ u.edad }} años)
          <button (click)="eliminarUsuario(u.id)">Eliminar</button>
        </li>
      </ul>

      <hr>
      <h2>Agregar Nuevo Usuario</h2>
      <input [(ngModel)]="nuevoNombre" placeholder="Nombre">
      <input type="number" [(ngModel)]="nuevaEdad" placeholder="Edad">
      <button (click)="agregarUsuario()">Enviar a la API</button>
    </div>
  `
})
export class AppComponent implements OnInit {
  usuarios: any[] = [];
  nuevoNombre = '';
  nuevaEdad: number | null = null;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe(data => this.usuarios = data);
  }

  agregarUsuario(): void {
    if (this.nuevoNombre && this.nuevaEdad) {
      const usuario = { nombre: this.nuevoNombre, edad: this.nuevaEdad };
      this.usuariosService.agregarUsuario(usuario).subscribe(() => {
        this.cargarUsuarios(); // Refrescar lista
        this.nuevoNombre = '';
        this.nuevaEdad = null;
      });
    }
  }

  eliminarUsuario(id: number): void {
    this.usuariosService.eliminarUsuario(id).subscribe(() => {
      this.cargarUsuarios();
    });
  }
}