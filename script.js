function insert (num){
    var texto = document.getElementById('resultado').innerHTML;
    if(texto=== '0'){
        document.getElementById('resultado').innerHTML = num;
    }else{
        document.getElementById('resultado').innerHTML = texto + num;
    }
}
