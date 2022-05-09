function bouton() {
    // récupération et affichage du nom 
    let nom = document.querySelector("#nom");
    let recuperer = document.querySelector("#recuperer");

    recuperer.innerHTML = nom.value;

    // récupération et affichage du mail
    let mail = document.querySelector("#mail");
    let recueil = document.querySelector("#recueil");

    recueil.innerHTML = mail.value;

    // recupération et affichage de la satisfaction par numérotation
    let number = document.querySelector("#nombre");
    let numerotation = document.querySelector("#numerotation");

    numerotation.innerHTML = number.value;

    // récupération et affichage du nom du coach
    let name = document.querySelector("#name");
    let stock = document.querySelector("#stock");

    stock.innerHTML = name.value;

// récupératin et affichage de l'expérience
    let type = document.querySelector("#type");
    let description = document.querySelector("#description");

    description.innerHTML = type.value;

}
