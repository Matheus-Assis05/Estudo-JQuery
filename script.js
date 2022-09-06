
$(function(){ //DEFININDO O JQUERY

    //FUNÇÕES
    
    confirm('PRONTO PARA COMEÇAR?'); //alert trava e timer so começa no OK

    //receber resposta do usuario e calcular
        $("#formBtn").click(function(){
            let resUser = $('#resposta').val() //recebendo na variavel o valor digitado no input
            let certo;
            
            if(evaluate(num1, num2, operador) == resUser){
                certo = true
            }

          
            //alerta que exibe resultado
            if(certo)
            {
                    alert('PARABENS, VOCE ESTÁ CERTO')
            }
            else
            {
                alert('VOCE ERROU!')
            }

              
            //consoleLog para teste
              console.log("Numero Digitado:", resUser)
              console.log("Usuario certo?:", certo)
  
        })



        //contador de segundos
        let segundos = 30; //selecionando o span dentro da div .countdown e passando a variavel "segundos" pro innerHTML
        $(".countdown span").html(segundos)
     
    setInterval(() => {
        //contador
        
        let segundoAtual = Number($(".countdown span").html()); //recebe no segundoatual o valor da tag span
        if(segundoAtual > 0) //só irá alterar o valor do segundo se ele for maior que 0
        {
         let novoSegundo = segundoAtual - 1; //cria uma variavel que diminui o valor a cada segundo
         $(".countdown span").html(novoSegundo)  //aplica na tag o valor atualizado a cada segundo
        }
        else
        {
            $(".resultado h1").html('TEMPO ESGOTADO!')
            
            $("#resposta").remove(); //comando do jquery que remove um elemento por inteiro

            $("#formBtn").html('FIM') //altera o botao para fim
        
        }


    }, 1000);

    
    
    //fazer submit nao reiniciar a pagina
         $("#wpResposta form").submit(function(e) {
                 e.preventDefault();
         });



    //operadores aleatorios (fiz de cabeça, to bem orgulhoso de mim)
    
    let operaVetor = ["+", "-", "/", "*"] //vetor com operadores
    let i = Math.floor((Math.random() * 4) + 0); //indice aleatorio de 0 a 4

    let num1 = Math.floor((Math.random() * 25) + 5); //numero aleatório de 5 a 25
    let num2 = Math.floor((Math.random() * 10) + 1); //numero aletorio de 1 a 10
    let operador = operaVetor[i];   //operador aleatório
    

    $("#num1").html(num1) //aplicando na tela
    $("#num2").html(num2)
    $("#operador").html(operador)

    //função para calcular resultado
    function evaluate(param1, param2, operator) {
        return eval(param1 + operator + param2);
      }

    //CONSOLE LOGS PARA TESTE
    console.log("Operador: ",operador)  
    console.log("Resultado: ", evaluate(num1, num2, operador))
    console.log("i: ", i)
    console.log("Operação: ", num1, operador, num2)
});