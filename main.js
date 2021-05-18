// ## EXO1
// ### Créer une class Personnage avec comme propriétés : 
// ### age , nom , ville
// ### Faire 2 instances de cette class.

class Personnage {
    constructor (age, nom, ville) {
        this.age = age,
        this.nom = nom,
        this.ville = ville
    }
    sePresenter = () => {
        console.log(`Bonjour, je m'appelle ${this.nom}`);
    }
}

let sacha = new Personnage(15, "Sacha", "Arturia");
let pierre = new Personnage(18, "Pierre", "Melancia");

// ## EXO2
// ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// ### Lancer cette méthode sur les deux instances de l'exo1
sacha.sePresenter();
pierre.sePresenter();