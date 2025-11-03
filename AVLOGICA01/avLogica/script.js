function media() {
    var nota1 = parseFloat(document.getElementById('n1').value)
    var nota2 = parseFloat(document.getElementById('n2').value)
    var nota3 = parseFloat(document.getElementById('n3').value)
    var nota4 = parseFloat(document.getElementById('n4').value)
    var nota5 = parseFloat(document.getElementById('n5').value)
    var nota6 = parseFloat(document.getElementById('n6').value)
    var nota7 = parseFloat(document.getElementById('n7').value)
    var nota8 = parseFloat(document.getElementById('n8').value)
    var nota9 = parseFloat(document.getElementById('n9').value)
    var nota10 = parseFloat(document.getElementById('n10').value)

    var media = document.getElementById("resposta")
    var conta = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10) / 10

    if (conta >= 7 && conta <=9) {
        media.textContent = conta.toFixed(2) + " - " + "PASSOU  "
        media.style.color = "green"
    } else if(conta === 10) {
        media.textContent = conta.toFixed(2) + " - " + "PASSOU 😊 "
        media.style.color = "blue"
    } else {
        media.textContent = conta.toFixed(2) + " - " + "REPROVOU DE ANO"
        media.style.color = "red"
    }

}

