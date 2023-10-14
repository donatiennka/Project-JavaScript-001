
// On crée la fonction principale, c'est elle qui s'occupe de lancer toutes les autres fonctions
function lancerJeu(){
    let choixUtilisateur = choisirPhrasesOuMots()
    let listeChoisi = chargerListe(choixUtilisateur)
    let partieMessage = adapterMessage(choixUtilisateur)
    const valRenvoyer = lancerBoucleDeJeu(listeChoisi, partieMessage)
    resultat = afficherResultat(valRenvoyer[0], valRenvoyer[1])
    console.log(resultat)
}
// On lance le jeu en appelant la fonction principale
lancerJeu()