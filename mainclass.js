
//fait appel/import du fichier classinfo ou l export est placé
const { human } = require('./classInfo.js')

//declaration des objets 
const alice = new human('Alice', 'Liddell', 28, ['martien', 'bielo ruze', 'cweole blockchain'])
const bob = new human('Bob', 'Lemon', 30, ['tchekpas','latessiweshwesh', 'javascript'])
const charlie = new human('Charlie', 'Charlot', 8, ['chinorussfrancokainrijapbelgoromain', 'Aminien', 'lunois', 'francoislefrancais'])


//appel des methodes d' objet  de la class human du fichier classinfo
//les propriétés d'un objet sont accessibles avec l'opérateur .
alice.printInfo()
alice.canVote()
alice.mostSkilledDev(charlie)
bob.printInfo()
bob.canVote()
bob.mostSkilledDev(charlie)
charlie.printInfo()
charlie.canVote()
charlie.mostSkilledDev(bob)