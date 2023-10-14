/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

//lancerJeu()
 /**
  * Selection grâce à la méthode getElementByld :
  * - l'input dans lequel le joueur va écrire son texte
  * - le bouton de validation
  */

let inputEcritureTexte = document.getElementById("inputEcriture")
let boutonDeValidation = document.getElementById("btnValiderMot")
console.log(inputEcritureTexte)
console.log(boutonDeValidation)

/**
 * Sélection grâce à la méthode querySelector :
 * - l'endroit où le mot proposé sera affiché
 * - l'endroit où le score sera affiché 
 */

let zoneAffichageMot = document.querySelector(".zoneProposition")
let zoneAffichageScore = document.querySelector(".zoneScore span")
console.log(zoneAffichageMot)
console.log(zoneAffichageScore)

/**
 * Sélection avec la méthode querySelectorAll :
 * - les boutons radio de choix
 */

let lesBoutonsRadio = document.querySelectorAll("#mots, #phrases")
console.log(lesBoutonsRadio)
// affichage élément par élément
for (let i = 0; i < lesBoutonsRadio.length; i++) {
    console.log(lesBoutonsRadio[i])
}