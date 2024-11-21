function sum(tablica) {
    return tablica.reduce((suma, liczba) => suma + liczba, 0);
}

const wynik = sum([3, 7, 5]); 
console.log(wynik);
