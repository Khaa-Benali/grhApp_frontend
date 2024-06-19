export class Collaborateur {
    cin!: number;
    nomComplet!: string;
    email!: string;
    numCompte!: string;
    numSecurite!: string;
    tel!: string;
    dateNaiss!: string;
    adresse!: string;
    commentaire!: string;
    contrat!: {
      dateD: string;
      dateF: string;
      baseSalary: number;
      typeContrat: string;
      documents: {
        nom: string;
        type: string;
        isMandatory: boolean;
      }[];
    };
    grade!: {
      departement: {
        nom: string;
      };
      poste: {
        nom: string;
      };
    };
    qualification!: {
      idQualification: number;
      natureEtude: string;
      niveauEtudes: string;
      certification: string;
      anneeExperience: number;
    };
  }