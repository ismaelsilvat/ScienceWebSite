let um = parseInt(1)
let dois = parseInt(2)
let tres = parseInt(3)
let quatro = parseInt(4)
let cinco = parseInt(5)
let seis = parseInt(6)
let sete = parseInt(7)
let oito = parseInt(8)
let nove = parseInt(9)


function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

function rendimento(){
    var trabalho = document.getElementById('trabalho').value
    var qq = document.getElementById('qq').value

    var rendimento = (trabalho / qq) * 100

    document.getElementById('text-area-rendimento').innerHTML = rendimento
} 

function carnot(){
    var QA = document.getElementById('QA').value
    var QB = document.getElementById('QB').value

    var rendimento_carnot = (QA - QB) / QA

    document.getElementById('text-area-carnot').innerHTML = rendimento_carnot
}

function Einterna(){
    var Calor = document.getElementById('calor').value
    var Trabalho = document.getElementById('Trabalho').value

    var energia_interna = Calor - Trabalho

    document.getElementById('text-area-e-interna').innerHTML = energia_interna
}
 

const enviar = function(){
    alert("Questionário enviado com sucesso!!")
    alert("Entraremos em contato com você brevemente, por um dos meios de contato que você preencheu(e-mail ou telefone)")
}