function resetIMC(){
    document.getElementById("inputPeso").value = "";
    document.getElementById("inputAltura").value = "";
}
function calculateIMC(){
  peso=inputPeso.value.replace(",",".")
  altura=inputAltura.value.replace(",",".")
  imc=peso/(altura*altura)
  pesoIdeal=21*(altura*altura)
   
    if(peso==""){
    alert("Por favor insira o Peso")
    }
    if(altura==""){
    alert("Por favor insira a Altura")
    }
  
    if(imc<=18.50){
      calculo=" Abaixo do peso. Um fast food agora cairia bem."
      document.getElementById("margem-body").style.height = "160vh";
    }
  else
    if(imc>=18.60&&imc<=24.90){
      calculo=" Peso Ideal, Parabéns, mas nada de exagerar."
      document.getElementById("margem-body").style.height = "160vh";
    }
  else
    if(imc>=25.00&&imc<=29.90){
      calculo=" Atenção, você está levemente acima do peso, subir uns degraus de escada cairiam bem agora."
      document.getElementById("margem-body").style.height = "160vh";
    }
  else
    if(imc>=30.00&&imc<=34.90){
      calculo=" Cuidado, você já está no nível obeso, para ser mais exato Obesidade Nível I, ou seja, já passou da hora de ingerir menos carboidratos."
      document.getElementById("margem-body").style.height = "160vh";
    }
  else
    if(imc>=35.00&&imc<=39.90){
      calculo=" CUIDADOOO, você está no nível obeso, para ser mais exato Obesidade Nível II, ou seja, a coisa é mais severa agora, procure um nutricionista e uns exercícios também ajudariam."
      document.getElementById("margem-body").style.height = "160vh";
    }
  else
    if(imc>=40.00){
      calculo=" Se você chegou nesse nível, olha meus parabéns, mas a coisa é mais séria do que pensa, com IMC acima de 40, o nível da sua obesidade é caracterizada como mórbida, ou seja, obesidade nível III, o máximo da tabela de IMC, procure com URGÊNCIA um nutricionista."
      document.getElementById("margem-body").style.height = "165vh";
    }
  
  paragraphResult.innerHTML=`Com base no seu peso e na sua altura mencionados acima, seu IMC é ${imc.toFixed(2).replace(".",",")}.<br> ${calculo}. <br> Com base na sua altura e no seu IMC o seu peso ideal é aproximadamente ${pesoIdeal.toFixed(2).replace(".",",")}Kg.`;
}
