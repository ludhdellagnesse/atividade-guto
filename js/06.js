function CalcularMulta(){
    let peso = document.querySelector("#peso").value ;
    let limite = 50;
    let valorMultaUnidade = 4 ;
    let excesso= peso - limite ;
    let valorTotalMunlta = excesso * valorMultaUnidade ;
    document.querySelector("#resposta").innerHTML="<b>kilos excedidos:</b>" + excesso ;
    document.querySelector("#resposta").innerHTML +="<br><b>Valor Multa: </b> R$ " + valorTotalMunlta ;
}