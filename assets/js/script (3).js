let pontos
let contatos = []

const calcularpontos = function () {
    pontos = 0

    let p11 = document.getElementById('p11')
    let p12 = document.getElementById('p12')
    let p13 = document.getElementById('p13')
    let p14 = document.getElementById('p14')
    let p15 = document.getElementById('p15')

    if (p11.checked) {
        pontos = parseInt(p11.value)
    } else if (p12.checked){ 
        pontos = parseInt(p12.value)
    } else if (p13.checked) {
        pontos = parseInt(p13.value)
    } else if (p14.checked){ 
        pontos = parseInt(p14.value)
    } else if (p15.checked) {
        pontos = parseInt(p15.value)
    }


    let p21 = document.getElementById('p21')
    let p22 = document.getElementById('p22')
    let p23 = document.getElementById('p23')
    let p24 = document.getElementById('p24')
    let p25 = document.getElementById('p25')

    if (p21.checked) {
        pontos += parseInt(p21.value)
    } else if (p22.checked) {
        pontos += parseInt(p22.value)
    } else if (p23.checked){ 
        pontos += parseInt(p23.value)
    } else if (p24.checked){ 
        pontos += parseInt(p24.value)
    } else if (p25.checked) {
        pontos += parseInt(p25.value)
    }
    

    let p31 = document.getElementById('p31')
    let p32 = document.getElementById('p32')
    let p33 = document.getElementById('p33')
    let p34 = document.getElementById('p34')
    let p35 = document.getElementById('p35')

    if (p31.checked) {
        pontos += parseInt(p31.value)
    } else if (p32.checked) {
        pontos += parseInt(p32.value)
    } else if (p33.checked) {
        pontos += parseInt(p33.value)
    } else if (p34.checked) {
        pontos += parseInt(p34.value)
    } else if (p35.checked) {
        pontos += parseInt(p35.value)
    }
    

    let p41 = document.getElementById('p41')
    let p42 = document.getElementById('p42')
    let p43 = document.getElementById('p43')
    let p44 = document.getElementById('p44')
    let p45 = document.getElementById('p45')

    if (p41.checked) {
        pontos += parseInt(p41.value)
    } else if (p42.checked) {
        pontos += parseInt(p42.value)
    } else if (p43.checked){  
        pontos += parseInt(p43.value)
    } else if (p44.checked) {
        pontos += parseInt(p44.value)
    } else if (p45.checked) { 
        pontos += parseInt(p45.value)
    }
    let p51 = document.getElementById('p51')
    let p52 = document.getElementById('p52')
    let p53 = document.getElementById('p53')
    let p54 = document.getElementById('p54')
    let p55 = document.getElementById('p55')

    if (p51.checked) {
        pontos += parseInt(p51.value)
    } else if (p52.checked) {
        pontos += parseInt(p52.value)
    } else if (p53.checked){  
        pontos += parseInt(p53.value)
    } else if (p54.checked) {
        pontos += parseInt(p54.value)
    } else if (p55.checked) { 
        pontos += parseInt(p55.value)
    }
    let p61 = document.getElementById('p61')
    let p62 = document.getElementById('p62')
    let p63 = document.getElementById('p63')
    let p64 = document.getElementById('p64')
    let p65 = document.getElementById('p65')

    if (p61.checked) {
        pontos += parseInt(p61.value)
    } else if (p62.checked) {
        pontos += parseInt(p62.value)
    } else if (p63.checked){  
        pontos += parseInt(p43.value)
    } else if (p64.checked) {
        pontos += parseInt(p64.value)
    } else if (p65.checked) { 
        pontos += parseInt(p65.value)
    }
    let p71 = document.getElementById('p71')
    let p72 = document.getElementById('p72')
    let p73 = document.getElementById('p73')
    let p74 = document.getElementById('p74')
    let p75 = document.getElementById('p75')

    if (p71.checked) {
        pontos += parseInt(p71.value)
    } else if (p72.checked) {
        pontos += parseInt(p72.value)
    } else if (p73.checked){  
        pontos += parseInt(p73.value)
    } else if (p74.checked) {
        pontos += parseInt(p74.value)
    } else if (p75.checked) { 
        pontos += parseInt(p75.value)
    }
    let p81 = document.getElementById('p81')
    let p82 = document.getElementById('p82')
    let p83 = document.getElementById('p83')
    let p84 = document.getElementById('p84')
    let p85 = document.getElementById('p85')

    if (p81.checked) {
        pontos += parseInt(p81.value)
    } else if (p82.checked) {
        pontos += parseInt(p82.value)
    } else if (p83.checked){ 
        pontos += parseInt(p83.value)
    } else if (p84.checked) {
        pontos += parseInt(p84.value)
    } else if (p85.checked) { 
        pontos += parseInt(p85.value)
    }

    document.getElementById('resultado').innerHTML = 'Resultado da pesquisa<br>Pontos: '+ pontos + '<br><h6>Máximo: 40, Mínimo: 8</h6>'
}

const addContato = function(){
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let mensagem = document.getElementById('mensagem').value

    if (nome != "" && email != "" && mensagem != "" && telefone != ""){ 
        let newContato = [nome, email, telefone, mensagem]
        contatos.push(newContato)
        console.log(contatos)

        document.getElementById('nome').value = ''
        document.getElementById('email').value = ''
        document.getElementById('telefone').value = ''
        document.getElementById('mensagem').value = ''
        
        let listMensagem = ''
        
        contatos.forEach(contato => {
            listMensagem += '***************************\n'
            listMensagem += 'Contato: ' + contato[0] + '\nE-mail: ' + contato[1] + '\nTelefone: ' + contato[2] + '\nMensagem: ' + contato[3] + '\n\n\n'
        });

        document.getElementById('listmensagem').value = listMensagem

    } else {
        alert('Preencha os campos corretamente!')
    }

    

}