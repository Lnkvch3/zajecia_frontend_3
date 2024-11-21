function palindrom(str) {
    let text = str.toLowerCase().replace();
    let drugitext = text.split('').reverse().join('');
    return text === drugitext;
}


console.log(palindrom("kajak"));
