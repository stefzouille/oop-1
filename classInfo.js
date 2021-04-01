// Traduire votre script info.js pour utiliser une classe, et donc des instances de classes, au lieu object literals.

// la classe devra se nommer Human
// il faudra un constructeur qui initialisera donc firstName, lastName, age, et language
// les fonctions printInfo, canVote, mostSkilledDev seront désormais des méthodes de cette classe

//declaration de class un template et de ses instances crea d objets
class human {
  //constructor est la fonction d'initialisation de notre objet au moment de son instanciation. Elle est appelée automatiquement.
  constructor(firstName, lastName, age, language) {  
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.language = language
  }

// printInfo est une méthodes d'instance. Elle ne peut être appelée que sur une instance!!!
  printInfo() {
      //return (`info de :\n ${this.firstname}\n ${this.lastName}\n ${this.age}\n${this.language}`)
      //remplacement du return et affichage des objets
      console.log(`${this.firstName}`)
      console.log(`${this.lastName}`)
      console.log(`${this.age}`)
      console.log(`${this.language}`)
  }

  //canVote est une méthodes d'instance. Elle ne peut être appelée que sur une instance!!!
  //verif si l age est sup ou egal a 18 ans
  canVote() {
   if (this.age >= 18) {
     console.log(true) 
    }  else {
      console.log(false)
    }
  }

  //mosmostSkilledDev est une méthodes d'instance. Elle ne peut être appelée que sur une instance!!!
  //verif  qui parle le plus de langage peu importe quel est passé en 1er ou 2eme
  mostSkilledDev(prs) {
    if (this.language.length > prs.language.length) {
      console.log(`${this.firstName} know mucho`)
   } else if (prs.language.length < this.language.length) {
     console.log(`${this.firstName} know mucho mucho`)
    }  else {
      console.log('draw')
    }
  } 
  //mostSkilledDev(bob, alice )
} 

//permet l eport du fichier d etre appeler par un main.js par exemple
exports.human = human

