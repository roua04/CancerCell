import { Component, OnInit } from '@angular/core';

export interface GeneralAdvice {
  message: string; // Le conseil motivant
}

@Component({
  selector: 'app-advice', // le sélecteur pour le composant
  templateUrl: './advice.component.html',  // Assurez-vous que le chemin est correct
  styleUrls: ['./advice.component.scss']  // Assurez-vous que le chemin est correct
})
export class AdviceComponent implements OnInit { // Assurez-vous d'utiliser "AdviceComponent"
  generalAdvice: GeneralAdvice[] = [
    { message: 'Restez fort et persévérez, chaque étape du traitement vous rapproche de la guérison.' },
    { message: 'Acceptez la maladie, mais ne laissez pas cela définir qui vous êtes.' },
    { message: 'Il est important de garder espoir et de rester positif pendant le parcours de traitement.' },
    { message: 'Entourez-vous des gens qui vous soutiennent et qui croient en votre guérison.' },
    { message: 'Faites confiance à vos médecins et suivez les traitements recommandés pour aller de l’avant.' },
    { message: 'Prendre soin de votre esprit est aussi important que de prendre soin de votre corps.' },
    { message: 'Chaque jour est une nouvelle chance de progresser. Vous êtes plus fort que vous ne le pensez.' },
  ];

  selectedAdvice: string = ''; // Conseil à afficher

  constructor() {}

  ngOnInit(): void {
    this.showRandomAdvice();
  }

  showRandomAdvice(): void {
    const randomIndex = Math.floor(Math.random() * this.generalAdvice.length);
    this.selectedAdvice = this.generalAdvice[randomIndex].message;
  }
}
