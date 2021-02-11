function fatorial(n){
    
    for(var i = n-1; i > 1; i--){
            n *= i
    }

    return n
}

console.log(fatorial(5))