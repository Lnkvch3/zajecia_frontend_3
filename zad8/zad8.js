// Pobranie referencji do formularza, pola tekstowego i listy
const form = document.getElementById('add-item-form');
const input = document.getElementById('item-input');
const list = document.getElementById('dynamic-list');

// Obsługa zdarzenia wysłania formularza
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Zapobiega domyślnemu zachowaniu, czyli odświeżeniu strony

  const newItem = input.value.trim(); // Pobranie i wyczyszczenie białych znaków z wpisanego tekstu

  if (newItem) {
    // Utworzenie nowego elementu listy
    const listItem = document.createElement('li');
    listItem.textContent = newItem; // Przypisanie tekstu do nowego elementu

    // Dodanie nowego elementu do listy
    list.appendChild(listItem);

    // Wyczyszczenie pola tekstowego po dodaniu elementu
    input.value = '';
  }
});

