let num = [5,8,2,9,3]
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]} `)
num.sort()
console.log(`O primeiro valor do vetor depois da ordenação é ${num[0]}`)


/*for(var c = 0; c < num.length; c++){
    console.log(num[c])
}*/

/*for(let c in num){
    console.log(num[c])
}*/

let pos = num.indexOf(4)
if(pos == -1){
    console.log(`Valor não encontrado`)        
} else{
console.log(`O valor 8 está na posição ${pos}`)
}
