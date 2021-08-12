//Numero randomico
let random = Math.floor(Math.random()*500) + 100
    random = random.toString()
function gerarRandom() {
    let aleatorio = document.getElementById('botaoRandom')
    random.toString()
    console.log(`Número randomico: ${random}`)    
    }  

function verificar(){
    const form = document.querySelector('.form')
    const botao = form.querySelector('#botao')
    let senha = form.querySelector('#senha').value
    senha = senha.toString();
    console.log(`Numero digitado da senha: ${senha}`)
    let dica1 = document.querySelector('.dica1')
    let dica2 = document.querySelector('.dica2')
    console.log(`Substring de senha ${senha.substring(3,1)}`)
    //DICAS    
    if(random == senha){
            dica1.innerHTML = 'Você acertou a senha!'
            dica2.innerHTML = 'Parabéns!'
            return
        } //DICA 1 (NUMERO CORRETOS)
        else if(senha.charAt(0) == random.charAt(0) 
        ||senha.charAt(0) == random.charAt(1) 
        ||senha.charAt(0) == random.charAt(2)
        ||senha.charAt(1) == random.charAt(0) 
        ||senha.charAt(1) == random.charAt(1) 
        ||senha.charAt(1) == random.charAt(2)
        ||senha.charAt(2) == random.charAt(0) 
        ||senha.charAt(2) == random.charAt(1) 
        ||senha.charAt(2) == random.charAt(2)){
            dica1.innerHTML = 'Você acertou um número.'
        }
        else{
            dica1.innerHTML = 'Você não acertou nenhum número!'
        } //DICA 2 (POSIÇÕES CORRETAS)
        if(random == senha){
            dica2.innerHTML = ''
        }
        else if(senha.charAt(0) == random.charAt(0)){
            dica2.innerHTML = 'Um numero esta na posição correta'
        }
        else if(senha.charAt(1) == random.charAt(1)){
            dica2.innerHTML = 'Um numero esta na posição correta'
        }
        else if(senha.charAt(2) == random.charAt(2)){
            dica2.innerHTML = 'Um numero esta na posição correta'
        }
        else{
            dica2.innerHTML = 'Nenhum numero na posição correta'
        }
        if(senha.substring(0,2) === random.substring(0,2)
        ||senha.substring(3,1) === random.substring(3,1)){
            dica1.innerHTML = 'Dois numeros corretos'
        }
        }

