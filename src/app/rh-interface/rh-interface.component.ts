import { Component, OnInit } from '@angular/core';
import { RhService } from '../services/rh.service';
import { Collaborateur } from '../models/Collaborateur';
interface PiecesParTypeContrat {
  [key: string]: string[];
}
@Component({
  selector: 'app-rh-interface',
  templateUrl: './rh-interface.component.html',
  styleUrls: ['./rh-interface.component.css']
})
export class RhInterfaceComponent implements OnInit {
  piecesParTypeContrat: PiecesParTypeContrat = {
    CDI: ['cv', 'lettre de motivation'], // Liste des pièces jointes pour le type de contrat CDI
    CDD: ['Piece 3', 'Piece 4'], // Liste des pièces jointes pour le type de contrat CDD
    // Ajoutez d'autres types de contrat avec leurs pièces jointes correspondantes si nécessaire
  };


  collaborateur: Collaborateur = {
    cin: 0,
    nomComplet: '',
    email: '',
    numCompte: '',
    numSecurite: '',
    tel: '',
    dateNaiss: '',
    adresse: '',
    commentaire: '',
    contrat: {
        dateD: '',
        dateF: '',
        baseSalary: 0,
        typeContrat: '',
        documents: []
    },
    grade: {
        departement: {
            nom: ''
        },
        poste: {
            nom: ''
        }
    },
    qualification: {
        idQualification: 0,
        natureEtude: '',
        niveauEtudes: '',
        certification: '',
        anneeExperience: 0
    }
};
ngOnInit(): void {

}
  message: string = '';

  constructor(private rhService: RhService) { }

  onSubmit() {
    this.rhService.ajouterCollaborateur(this.collaborateur)
      .subscribe(
        (response) => {
          console.log('Collaborateur ajouté avec succès : ', response);
          this.message = 'Collaborateur ajouté avec succès!';
          this.collaborateur = new Collaborateur(); // Réinitialise le formulaire
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du collaborateur : ', error);
          this.message = 'Erreur lors de l\'ajout du collaborateur.';
        }
      );
  }
}
