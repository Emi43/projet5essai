let read = JSON.parse(localStorage.getItem("forConfirmOrder"));
console.log(read);

document.querySelector(".commande").innerHTML = 
    `<h1 class="commande_confirmation">Merci ${read.name} pour votre commande d'un montant de ${read.price}.</h1>
    <div class="commande_id">
    <p>Le numéro de votre commande est : <strong>${read.id}</strong><br>
     Nous la traitons dans les plus brefs délais. </p>
     </div>
    `;

localStorage.clear();