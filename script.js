//Função principal para inicar a contagem
  function Iniciar(){
    let qtd = document.getElementById("qtd").value;
    // Função para Calcular se o número é múltiplo
    // usando o módulo de divisão
    function Calcular(valor, multiplo){
      resto = valor % multiplo;
      if(resto==0)
        return true;
      else
        return false;
      }
      // Array contendo os múltiplos valores de 3,5 e ambos
    let array = [];
      // Contador de acordo com os parametros que usuario determina
    for(let i=1;i<=qtd;i++){
      if(Calcular(i,5) && Calcular(i,3)){
        array.push(" Jovens Gênios ");
        }else{
          if(Calcular(i,3)){
            array.push(" Jovens ");
          }
          else if(Calcular(i,5)){
            array.push(" Gênios ");
          }else {
            array.push(i);
          }
        }
      }
    // Passar o array para o index
    let resultado = "<p class='alert alert-primary' role='alert'><b>Vamos Contar:</b> " + array + "</p> ";
    document.getElementById('resultado').innerHTML = resultado;
  }
