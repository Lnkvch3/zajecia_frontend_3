function zakres(a, b) {
    let tablica = [];
    for (let i = a; i <= b; i++) {
        tablica.push(i);
    }
    return tablica;
}

const wynik = zakres(1, 4);
console.log(wynik);
