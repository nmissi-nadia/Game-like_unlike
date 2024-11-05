// Sélection des éléments HTML par leurs identifiants
let like = document.getElementById("like");
let dislike = document.getElementById("dislike");
let continer_img = document.getElementById("continer_img");
let totalHtml = document.getElementById("total");
let nom = document.getElementById("game");

// Tableaux pour les images et les noms des dress
let imags = ["../assets/imgs/dress5.jpg", "../assets/imgs/dress1.jpg", "../assets/imgs/dress2.jpg", "../assets/imgs/dress3.jpg", "../assets/imgs/dress4.jpg", "../assets/imgs/dress6.jpg"];
let names = ["dress1", "dress2", "dress3", "dress4", "dress5", "dress6"];

let count = 0;

function updateCard() {
  console.log(count < imags.length)
    if (count < imags.length) {
        
        continer_img.style.backgroundImage = `url('${imags[count]}')`;
        nom.innerHTML = `<span>${names[count]}</span>`;
    } else {
        
        document.getElementById("continer-total").style.display = "block";
    }
    count++; 
}
updateCard()

like.addEventListener('click', () => {
    if (count < imags.length) {
        totalHtml.innerHTML += `
            <div class="image-grid-item">
                <img src="${imags[count-1]}" alt="Liked Image">
            </div>`;
    }
    updateCard();
});


dislike.addEventListener('click', () => {
  console.log(count)
    updateCard(); 
});
