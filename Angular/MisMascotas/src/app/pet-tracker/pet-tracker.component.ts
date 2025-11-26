import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// 1. Añadimos 'type' a la interfaz
export interface Pet {
  name: string;
  fed: boolean;
  type: string; // Nueva propiedad: 'Perro', 'Gato', etc.
}

@Component({
  selector: 'app-pet-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pet-tracker.component.html',
  styleUrl: './pet-tracker.component.css' // Corregido a .css (a veces es .scss)
})
export class PetTrackerComponent {
  pets: Pet[] = [];
  newPet: string = '';
  
  // 2. Variable para el select (Valor por defecto)
  newPetType: string = 'Perro'; 
  
  filter: string = 'all';

  addPet() {
    const name = this.newPet.trim();
    
    // Validación 1: Nombre vacío
    if (!name) return;

    // Validación 2: Longitud mínima (Extra opcional 1)
    if (name.length < 3) {
      alert('El nombre debe tener al menos 3 letras');
      return;
    }

    // Validación 3: Duplicados
    if (this.pets.some(p => p.name.toLowerCase() === name.toLowerCase())) {
      alert('¡Esa mascota ya existe!');
      return;
    }

    // 3. Crear objeto con la categoría (Extra opcional 2)
    this.pets.push({ 
      name: name, 
      fed: false, 
      type: this.newPetType 
    });

    // 4. Ordenar alfabéticamente (Extra opcional 3)
    this.sortPets();

    // Limpiar formulario
    this.newPet = ''; 
    this.newPetType = 'Perro'; // Resetear al valor por defecto
  }

  // Método auxiliar para ordenar
  sortPets() {
    this.pets.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Método para obtener el emoji según el tipo
  getIcon(type: string): string {
    switch (type) {
      case 'Perro': return '🐶';
      case 'Gato': return '🐱';
      default: return '🐰';
    }
  }

  deletePet(pet: Pet) {
    const index = this.pets.indexOf(pet);
    if (index !== -1) {
      this.pets.splice(index, 1);
    }
  }

  // Nota: Al usar [(ngModel)]="pet.fed" en el HTML, no es estrictamente necesario 
  // llamar a toggleFed(), ya que el checkbox actualiza el booleano directamente.
  
  get fedCount(): number {
    return this.pets.filter(p => p.fed).length;
  }

  get filteredPets(): Pet[] {
    // La lista filtrada mantendrá el orden alfabético del array original
    if (this.filter === 'fed') return this.pets.filter(p => p.fed);
    if (this.filter === 'hungry') return this.pets.filter(p => !p.fed);
    return this.pets;
  }
}