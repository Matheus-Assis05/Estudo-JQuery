
$(function(){ //DEFININDO O JQUERY
    let segundos = 30;
    


    //funções
    $(".countdown span").html(segundos) //selecionando o span dentro da div .countdown e passando a variavel "segundos" pro innerHTML
    
    setInterval(() => {
       //contador de segundos
        let segundoAtual = Number($(".countdown span").html()); //recebe no segundoatual o valor da tag span
        if(segundoAtual > 0) //só irá alterar o valor do segundo se ele for maior que 0
        {
         let novoSegundo = segundoAtual - 1; //cria uma variavel que diminui o valor a cada segundo
         $(".countdown span").html(novoSegundo)  //aplica na tag o valor atualizado a cada segundo
        }
        else
        {
            $(".resultado h1").html('TEMPO ESGOTADO')
        }
    }, 1000);



});


/* let segundoAtual = 45
document.querySelector('#segundo').innerHTML = segundoAtual

setInterval(() => {
    
    let novoSegundo = segundoAtual--

    segundoAtual.innerHTML = novoSegundo

    console.log(novoSegundo)
}, 1000); */