// Améliorer la classe Point du cours en ajoutant une méthode distance pour calculer et retourner la distance entre 2 points.
// La distance entre deux points peut se calculer en consultant: 
// https://fr.wikipedia.org/wiki/Distance_entre_deux_points_sur_le_plan_cart%C3%A9sien
// Pour calculer la racine carrée d'un nombre on utilise directement la méthode Math.sqrt:
// Définit d'une classe Point

// declaration de la class et de ses objet en parametre x,y
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  //affiche les parametres passé a l'objet
  show() {
    console.log(`(${this.x}, ${this.y})`)
  }

  //verif si les parametres sont egal en valeur
  isEqual(point) {
    console.log(this.x === point.x && this.y === point.y ? true : false)
  }
  //bon le calcule distance ramene a une formule    !(a+ b)² = a² + 2ab + b²          (a - b)² = a² - 2ab -b²
  
  distance(dt) {
    //Pour calculer la racine carrée d'un nombre on utilise directement la méthode Math.sqrt: Math.sqrt(9) // retourne 3
    //Pour mettre au carré une nombre on le multiplie par lui même ou sinon on utilise la méthode Math.pow:
    //ATTENTION la Math.pow en 1er parametre c est le nb le 2eme parametre c est le nb de la puissance
      console.log(Math.sqrt((Math.pow((dt.x - this.x),2)) + (Math.pow((dt.y - this.y),2))))
  }        
}


//phrase pour export
exports.Point = Point

