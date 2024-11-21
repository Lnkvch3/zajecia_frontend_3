const liczbaElement = document.getElementById('liczba');
const dodajButton = document.getElementById('dodaj');
const przelaczKolorButton = document.getElementById('przelaczKolor');

let liczba = 0;
let czyCzarnyKolor = true;

dodajButton.addEventListener('click', () => {
    liczba++;
    liczbaElement.textContent = liczba;
});


przelaczKolorButton.addEventListener('click', () => {
    czyCzarnyKolor = !czyCzarnyKolor; 
    liczbaElement.style.color = czyCzarnyKolor ? 'black' : 'red';
});