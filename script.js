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
      // Arrays contendo os múltiplos valores de 3,5 e ambos
      let multiplos = [];
      let multiplos_3 = [];
      let multiplos_5 = [];
      // Contador de acordo com os parametros que usuario determina
      for(let i=1;i<=qtd;i++){
        if(Calcular(i,3))
          multiplos_3.push(" Jovens ");

        if(Calcular(i,5))
          multiplos_5.push(" Gênios ");

        if(Calcular(i,5) && Calcular(i,3))
            multiplos.push(" Jovens Gênios ");
      }
      // Juntar o resultado em uma variável só
      let resultado = "<b>Os múltiplos de 3 são: </b>" + multiplos_3 + "<br><b>Os múltiplos de 5 são:  </b>" + multiplos_5 + "<br><b>Os múltiplos de ambos são: </b>" + multiplos;
      document.getElementById('resultado').innerHTML = resultado;
    }
