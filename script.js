
$(function(){ //DEFININDO O JQUERY
    
    
    
    


    //funções
    
    //receber resposta do usuario e calcular
    $("#btn").click(function(){
        const usuarioRes = Number($("#resposta").val())
        
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
        }
    }, 1000);

    //fazer submit nao reiniciar a pagina
    $("#wpResposta form").submit(function(e) {
        e.preventDefault();
    });

    //operadores aleatorios
    
    let operaVetor = ["+", "-", "/", "*"] //vetor com operadores
    let i = Math.floor((Math.random() * 4) + 0); //indice aleatorio de 0 a 4

    let num1 = Math.floor((Math.random() * 100) + 1); //numero aleatório de 1 a 100
    let num2 = Math.floor((Math.random() * 100) + 1); //numero aletorio de 1 a 100
    let operador = operaVetor[i];   //operador aleatório
    

    $("#num1").html(num1) 
    $("#num2").html(num2)
    $("#operador").html(operador)

    //resultado
    function evaluate(param1, param2, operator) {
        return eval(param1 + operator + param2);
      }

    
      




    //CONSOLE LOGS PARA TESTE
    console.log("Operador: ",operador)  
    console.log("Resultado: ", evaluate(num1, num2, operador))
    console.log("i: ", i)
    console.log("Operação: ", num1, operador, num2)
    console.log("Numero Digitado:", usuarioRes)
});


/* let segundoAtual = 45
document.querySelector('#segundo').innerHTML = segundoAtual

setInterval(() => {
    
    let novoSegundo = segundoAtual--

    segundoAtual.innerHTML = novoSegundo

    console.log(novoSegundo)
}, 1000); */