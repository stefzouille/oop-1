//Créer un object literal alice qui contiendra les informations suivantes:

// firstName: 'Alice'
// lastName : 'Liddell'
// age: 28
// Dans le même fichier créer object literal bob qui contiendra les informations suivantes:

// firstName: 'Bob'
// lastName: 'Lemon'
// age: 30
// Dans le même fichier créer object literal charlie qui contiendra les informations suivantes:

// firstName: 'Charlie'
// lastName: 'Charlot'
// age: 8


//creation de l objet literal alice - bob - charlie qui sont des variables
const alice = {
  firstname : 'Alice',    //le reste sont des propriétées avec leur key
  lastName : 'Liddell',
  age: 28,
  language: ['martien', 'bielo ruze', 'cweole blockchain']
}
const bob = {
  firstname : 'Bob',
  lastName : 'Lemon',
  age: 30,
  language:['tchekpas','latessiweshwesh', 'javascript']
}
const charlie = {
  firstname : 'Charlie',
  lastName : 'Charlot',
  age: 8,
  language: ['chinorussfrancokainrijapbelgoromain', 'Aminien', 'lunois', 'francoislefrancais']
}

//fct avec parametre qui prend un odjet tips et et affiche les info
//Les objets peuvent être des paramètres de fonctions:
const printInfo = (tips) => {
  return (`info de :\n ${tips.firstname}\n ${tips.lastName}\n ${tips.age}\n${tips.language}`)
}
// affiche les info passe par la fct ci dessus
console.log(printInfo(alice))
console.log(printInfo(bob))
console.log(printInfo(charlie))

//fct canVote rend true si maj a 18 ou false si non majeur
const canVote = (printInfo) => {
  if (printInfo.age >= 18) {
    return 'true' 
  } else {
    return 'false'
  }
}
//appel de la fct canvote et affiche les info demandé
console.log(canVote(alice))
console.log(canVote(bob))
console.log(canVote(charlie))

//fct verif de la personne ki connais le plus de langue passé au tab de language
const mostSkilledDev = (lang1, lang2) => {
  if (lang1.language.length > lang2.language.length) {
    return `${lang1.firstname} know mucho`
  } else if (lang1.language.length < lang2.language.length) {
    return `${lang2.firstname} know mucho`
  } else {
    return 'draw'
  }
}
//appel de la fct et 2 parametre pour les comparer
console.log(mostSkilledDev(bob, alice ))
