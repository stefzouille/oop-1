// Traduire votre script info.js pour utiliser une classe, et donc des instances de classes, au lieu object literals.

// la classe devra se nommer Human
// il faudra un constructeur qui initialisera donc firstName, lastName, age, et language
// les fonctions printInfo, canVote, mostSkilledDev seront désormais des méthodes de cette classe

class human {
  constructor(firstName, lastName, age, language) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.language = language
  }
  printInfo() {
      //return (`info de :\n ${this.firstname}\n ${this.lastName}\n ${this.age}\n${this.language}`)
      console.log(`${this.firstName}`)
      console.log(`${this.lastName}`)
      console.log(`${this.age}`)
      console.log(`${this.language}`)
  }
  canVote() {
   if (this.age >= 18) {
     console.log(true) 
    }  else {
      console.log(false)
    }
  }
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
const alice = new human('Alice', 'Liddell', 28, ['martien', 'bielo ruze', 'cweole blockchain'])
const bob = new human('Bob', 'Lemon', 30, ['tchekpas','latessiweshwesh', 'javascript'])
const charlie = new human('Charlie', 'Charlot', 8, ['chinorussfrancokainrijapbelgoromain', 'Aminien', 'lunois', 'francoislefrancais'])


//console.log(alice.firstName)
// alice.printInfo()
// alice.canVote()
// alice.mostSkilledDev(charlie)
// bob.printInfo()
// bob.canVote()
// bob.mostSkilledDev(charlie)
charlie.printInfo()
charlie.canVote()
charlie.mostSkilledDev(bob)

