
//fait appel/import du fichier classinfo ou l export est placé
const { Point } = require('./point.js')


//declaration des distances dans ma class d'objets 
const p1 = new Point(1, 2)

const p2 = new Point(10, 22)

//passe une comparaison de l arrivé p2 et du depart p1 a ma methode
p1.distance(p2).toFixed(2)

p1.isEqual(p2).toFixed(2)


// console.log(Math.sqrt(9))
// console.log(Math.pow(3,2))