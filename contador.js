# contador.js
let numeroAluno = 10;

for(let contador = 0; contador < numeroAluno; contador++){

    if(contador == 0){
        console.log("O numero é Zero")
    }else if(contador % 2 == 0){
        console.log(`O numero ${contador} é Par`)
    }else if(contador % 2 == 1){
        console.log(`O numero ${contador} é Impar`)
    }
}
