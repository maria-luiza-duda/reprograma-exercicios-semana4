// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

function imprimeRetornarSoma (arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

console.log(imprimeRetornarSoma([10,78,2]))


// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

/*const numInteiros = [10, 8, 7, 2, 3, 1]
function receberNumInteiros(arr) {
    for (let i = 0; i > arr.length; i++) {
        if (i > 5) {
            return(i)
        } else {
            return()
        }
    }
    console.log(numInteiros)
}

somarInteiros(inteiros)*/

const inteiros = [2, 3, 1, 45, 30, 20, 10]
function maiorqueCinco(arr) {
    //inteiros.indexOf([])
    for (let i = 0; i > arr.length; i++) {
        
        if (inteiros > 5) {
            return(i)
        } 
    }
    console.log(maiorqueCinco)
}

console.log(maiorqueCinco(inteiros))
