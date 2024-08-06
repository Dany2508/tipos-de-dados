          //TIPOS DE DADOS PRIMITIVOS


//Manipulação de Strings
var primeiroNome = "Danielly"
var ultimoNome = "Horst"
var nomeCompleto = primeiroNome + " " + ultimoNome

console.log(nomeCompleto)

//Operações com Numbers
let numero1 = 10
let numero2 = 20

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let muntiplicacao = numero1 * numero2
let divisao = numero1 / numero2

console.log (soma, subtracao, muntiplicacao, divisao)

//Trabalhando com Booleanos: BOOLEANOS verifica se é verdadeiro
var estaChovendo = true
if (estaChovendo){
    console.log("Está chovendo!")
}else{
    console.log("Não está chovendo")
}

//Trabalhando com Null e Undefined
let resposta = null
let nota

console.log(resposta, nota)

//Utilizando Symbol
var idUnico = Symbol()

var produto = {
    [idUnico]: 1234
}

console.log(produto [idUnico])

//Trabalhando com bigInt: números grandes
let grandeInteiro = BigInt("12345678901234567890")

console.log(grandeInteiro)