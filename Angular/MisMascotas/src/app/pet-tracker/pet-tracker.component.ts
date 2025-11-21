import { Component } from '@angular/core';

@Component({
  selector: 'app-pet-tracker',
  imports: [],
  templateUrl: './pet-tracker.component.html',
  styleUrl: './pet-tracker.component.css'
})
export class PetTrackerComponent {
  pets: PetTrackerComponent[] = [];
  newPet: string = '';
  filter: string = 'all';

  addPet(){
    const name = this.newPet.trim();
    if (!name) return;
    if (this.pets.some(n => n.name === name)) return;
    
  }
}
