import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  // Liste des questions à poser
  questions = [
    {
      question: 'Avez-vous perdu du poids récemment ?',
      options: ['Oui', 'Non'],
      response: ''
    },
    {
      question: 'Avez-vous des douleurs persistantes ?',
      options: ['Oui', 'Non'],
      response: ''
    },
    {
      question: 'Avez-vous des antécédents familiaux de cancer ?',
      options: ['Oui', 'Non'],
      response: ''
    },
    {
      question: 'Avez-vous remarqué des changements dans votre peau ou des bosses inhabituelles ?',
      options: ['Oui', 'Non'],
      response: ''
    },
    {
      question: 'Avez-vous des difficultés à respirer ?',
      options: ['Oui', 'Non'],
      response: ''
    },
    {
      question: 'Avez-vous un essoufflement accru ?',
      options: ['Oui', 'Non'],
      response: ''
    }
  ];

  // Indicateur de la question courante
  currentQuestionIndex = 0;

  // Résultat de l'évaluation
  result: string = '';

  // Fonction pour passer à la question suivante et évaluer le cancer à la fin
  nextQuestion(answer: string) {
    // Sauvegarde de la réponse à la question courante
    this.questions[this.currentQuestionIndex].response = answer;
    
    // Passage à la question suivante
    this.currentQuestionIndex++;

    // Si toutes les questions ont été répondues, on estime le cancer
    if (this.currentQuestionIndex === this.questions.length) {
      this.estimateCancer();
    }
  }

  // Fonction pour estimer le type et le niveau du cancer en fonction des réponses
  estimateCancer() {
    // Collecter les réponses de chaque question
    let responses = this.questions.map(q => q.response);
    
    // Calcul du nombre de réponses "Oui"
    const yesCount = responses.filter(response => response === 'Oui').length;
    
    // Initialiser le résultat par défaut
    let cancerType = '';
    
    // Estimation du type de cancer basé sur les réponses spécifiques
    if (responses.includes('Oui') && responses[4] === 'Oui') {  // Difficultés à respirer
      cancerType = 'Cancer du poumon possible';
    } else if (responses.includes('Oui') && responses[3] === 'Oui') {  // Changements de peau
      cancerType = 'Cancer de la peau possible';
    } else {
      cancerType = 'Aucun cancer spécifique détecté';
    }

    // Estimation du niveau de gravité basé sur le nombre de "Oui"
    if (yesCount >= 4) {
      this.result = `${cancerType}. Les symptômes semblent être présents à un stade avancé. Il est urgent de consulter un médecin pour des tests approfondis.`;
    } else if (yesCount >= 2) {
      this.result = `${cancerType}. Les symptômes sont présents mais à un stade modéré. Consultez un médecin pour des tests supplémentaires.`;
    } else {
      this.result = `${cancerType}. Les symptômes semblent être faibles. Il est recommandé de faire des examens de routine.`;
    }
  }
}
