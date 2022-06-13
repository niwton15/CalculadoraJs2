function calcular(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = '';
}

function executar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado);
}