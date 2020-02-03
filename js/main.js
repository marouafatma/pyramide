
function afficher(){
    var etages = document.getElementById("nbEtages");

    var strNombre = etages.value;
    var nNombre = parseInt(strNombre);
     Pyramide=preparePyramide(nNombre);
    var elPyramide = document.getElementById("Pyramide");

    elPyramide.innerHTML = Pyramide;
}
function preparePyramide(nbLignes){
    const SYMBOLE = "#";
    const RETOUR_LIGNE = "<br>";
    var strPyramide = "";

    // Algorithme de la création du triangle
    // Variables locales
    var noLigne = 0;
    var noColonne = 0;
    var i=-1;
    while (noLigne <= nbLignes) {

            for (j = 0; j < i; j++)
            {
                strPyramide += SYMBOLE;
            }


        strPyramide += RETOUR_LIGNE;

        i=i+2;
        noLigne++;

        noColonne = 0;
    }

    return strPyramide;
}

