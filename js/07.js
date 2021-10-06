function calcularSalario(){
    let salarioBruto = document.querySelector("#salario-bruto").value ;
    let inss = salarioBruto * 8 / 100 ;
    let ir = salarioBruto * 11 / 100 ;
    let sindicato = salarioBruto * 5 / 100 ;
    let descontos = inss + ir +  sindicato ;
    let salarioLiquido = salariobruto - descontos ;
    document.querySelector("#resposta").innerHTML = "<b>IR:</b> R$" + ir + "<br>" ;
    document.querySelector("#resposta").innerHTML += "<b>Inss:</b>" + inss + "<br>";
    document.querySelector("#resposta").innerHTML += "<b>sindicato:</b> R$ " + sindicato + "<br>" ;
    document.querySelector("#resposta").innerHTML += "<b>salarioLiquido:</b> R$ " + salarioLiquido ;
}