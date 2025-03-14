function insert (num){
    var texto = document.getElementById('calculo').innerHTML;
    if(texto=== '0'){
        document.getElementById('calculo').innerHTML = num;
    }else{
        document.getElementById('calculo').innerHTML = texto + num;
    }
}
function clean(){
    document.getElementById('calculo').innerHTML= '0';
    document.getElementById('resposta').innerHTML= '0';
}
function back(){
    var texto = document.getElementById('calculo').innerHTML;
    document.getElementById('calculo').innerHTML = texto.substring(0,texto.length -1);
}
function calcular(){
    var texto = document.getElementById('calculo').innerHTML;
    var texto = eval(texto);
    document.getElementById('resposta').innerHTML= texto;
    document.getElementById('calculo').innerHTML= '0';
}