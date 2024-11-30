import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent implements OnInit {
  // Liste manuelle des types de cancer, niveaux et traitements
  types: string[] = ['Cancer du sein', 'Cancer du poumon', 'Cancer de la peau'];
  niveaux: string[] = ['Niveau 1', 'Niveau 2', 'Niveau 3'];
  
  selectedType: string = '';
  selectedNiveau: string = '';
  
  // Liste des traitements pour chaque combinaison de type et niveau
  traitementsData = [
    {
      type: 'Cancer du sein',
      niveau: 'Niveau 1',
      traitements: ['Chirurgie', 'Radiothérapie', 'Chimiothérapie']
    },
    {
      type: 'Cancer du sein',
      niveau: 'Niveau 2',
      traitements: ['Chirurgie', 'Chimiothérapie']
    },
    {
      type: 'Cancer du poumon',
      niveau: 'Niveau 1',
      traitements: ['Chirurgie', 'Radiothérapie']
    },
    {
      type: 'Cancer du poumon',
      niveau: 'Niveau 2',
      traitements: ['Chirurgie', 'Chimiothérapie']
    },
    {
      type: 'Cancer de la peau',
      niveau: 'Niveau 1',
      traitements: ['Chirurgie', 'Radiothérapie']
    },
    {
      type: 'Cancer de la peau',
      niveau: 'Niveau 2',
      traitements: ['Chirurgie', 'Chimiothérapie']
    },
  ];
  
  // Variable pour afficher le message personnalisé
  treatmentMessage: string = '';

  filteredTreatments: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  // Fonction pour filtrer et générer le message
  filterTreatments(): void {
    // Trouver l'objet correspondant au type et au niveau sélectionnés
    const treatment = this.traitementsData.find(
      (t) => t.type === this.selectedType && t.niveau === this.selectedNiveau
    );
    
    // Si un traitement est trouvé, générer le message
    if (treatment) {
      this.treatmentMessage = `Puisque vous êtes malade du cancer ${this.selectedType}, au niveau ${this.selectedNiveau}, il est conseillé de suivre les traitements suivants : ${treatment.traitements.join(', ')}.`;
    } else {
      // Sinon, effacer le message
      this.treatmentMessage = '';
    }
  }
}
