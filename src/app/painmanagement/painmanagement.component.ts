import { Component, OnInit } from '@angular/core';

export interface PainManagement {
  message: string; // Le conseil pour la gestion de la douleur
}

@Component({
  selector: 'app-painmanagement',
  templateUrl: './painmanagement.component.html',
  styleUrls: ['./painmanagement.component.scss']
})
export class PainManagementComponent implements OnInit {
  // Liste des conseils pour la gestion de la douleur
  painManagementAdvice: PainManagement[] = [
    { message: 'Essayez des techniques de respiration profonde pour réduire la douleur.' },
    { message: 'La physiothérapie et l\'exercice léger peuvent aider à améliorer la mobilité et à réduire la douleur.' },
    { message: 'Discutez avec votre médecin des options de traitement de la douleur adaptées à votre condition.' },
    { message: 'Les approches psychologiques comme la méditation peuvent aider à gérer la douleur émotionnelle.' },
    { message: 'Reposez-vous et prenez soin de votre corps pour éviter l\'épuisement.' },
  ];

  selectedAdvice: string = ''; // Conseil à afficher

  constructor() {}

  ngOnInit(): void {
    this.showRandomAdvice(); // Afficher un conseil aléatoire au démarrage
  }

  // Fonction pour afficher un conseil aléatoire
  showRandomAdvice(): void {
    const randomIndex = Math.floor(Math.random() * this.painManagementAdvice.length);
    this.selectedAdvice = this.painManagementAdvice[randomIndex].message;
  }
}
