// Importation des listes depuis le fichier config.js
//importScripts(config.js)


// On crée la fonction qui demande à l'utilisateur s'il veut jouer avec des phrases ou des mots
function choisirPhrasesOuMots(){
    let choix = prompt("Veillez choisir la liste : mots ou phrases")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Veillez choisir la liste : mots ou phrases")
    }
    return choix
}

// On crée une fonction qui va permettre d'adapter la phrase à afficher selon qu'il s'agit d'un mot ou d'une phrase
function adapterMessage(choix){
    let partieMessage
    if (choix === "mots"){
        partieMessage = "le mot"
        } else {
        partieMessage = "la phrase"
    }
    return partieMessage
}
// On crée une fonction qui va charger dans une variable unique la liste de mots  
// ou la liste de phrases d'après le choix de l'utilisateur
function chargerListe(choix){
    let liste = []
    if (choix === "mots"){
        liste = listeMots
    } else {
        liste = listePhrases
    }
    return liste
}

// On crée une fonction qui contient la boucle principale de jeu avec une seule boucle 
// que l'utilisateur ait choisi de jouer avec des mots ou des phrases
function lancerBoucleDeJeu(listeATaper, partieMessage){
    let score = 0
    let nombreElementDansListe = listeATaper.length
        for (let i = 0; i < nombreElementDansListe; i++) {
        let motUtilisateur = prompt("Entrez " +partieMessage+ " : " +listeATaper[i])
        if (motUtilisateur === listeATaper[i]) {
        score++ 
        }    
    }
    // On crée un tableau ou un objet qui contient les données que notre fonction doit retourner
    // ceci uniquement lorsqu'une fonction doit renvoyer plusieurs valeurs ici on choisi un tableau
    const valARetourner = [score, nombreElementDansListe]
    return valARetourner
}

// On crée une fonction qui affiche le score en fin de partie
function afficherResultat(score, nombreElementDansListe){
    let message = "Votre score final est de " + score + " sur " +nombreElementDansListe
    return message
}


// On crée la fonction principale, c'est elle qui s'occupe de lancer toutes les autres fonctions
function lancerJeu(){
    let choixUtilisateur = choisirPhrasesOuMots()
    let listeChoisi = chargerListe(choixUtilisateur)
    let partieMessage = adapterMessage(choixUtilisateur)
    const valRenvoyer = lancerBoucleDeJeu(listeChoisi, partieMessage)
    resultat = afficherResultat(valRenvoyer[0], valRenvoyer[1])
    console.log(resultat)
}


