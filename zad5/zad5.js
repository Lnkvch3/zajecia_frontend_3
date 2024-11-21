fibonnaci = function(n){
    if(n<=0){
        return "Podaj liczbe wieksza od zera";
    }
    if(n === 1){
        return 0;
    }
    if(n === 2){
        return 1;
    }
    let a=0, b=1,  c;
    for(let i=2; i<=n; i++){
        c=a+b;
        a=b;
        b=c;

    }

    return b;

}

console.log(fibonnaci(9));