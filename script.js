
$(function(){ //DEFININDO O JQUERY
    
    
    
    


    //funções
    
    //receber resposta do usuario e calcular
    $("#btn").click(function(){
        const resposta = Number($("#resposta").val())
        console.log(resposta)
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
    let num1 = $("#num1").html()    
    let num2 = $("#num2").html()
    let operador = $("#operador").html()

    //resultado
    function evaluate(param1, param2, operator) {
        return eval(param1 + operator + param2);
      }

      console.log(evaluate(num1, num2, operador))
      


    console.log(num1, operador, num2)
});


/* let segundoAtual = 45
document.querySelector('#segundo').innerHTML = segundoAtual

setInterval(() => {
    
    let novoSegundo = segundoAtual--

    segundoAtual.innerHTML = novoSegundo

    console.log(novoSegundo)
}, 1000); */