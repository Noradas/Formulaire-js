function bouton() {
    let nom = document.querySelector("#nom");
    let recuperer = document.querySelector("#recuperer");

    recuperer.innerHTML = nom.value;

    let mail = document.querySelector("#mail");
    let recueil = document.querySelector("#recueil");

    recueil.innerHTML = mail.value;

    let number = document.querySelector("#number");
    let numerotaion = document.querySelector("#numerotaion");

    numerotaion.innerHTML = number.value;

    let name = document.querySelector("#name");
    let stock = document.querySelector("#stock");

    stock.innerHTML = name.value;

    let type = document.querySelector("#type");
    let description = document.querySelector("#description");

    description.innerHTML = type.value;

}
