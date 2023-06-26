//efeito de esconder formulário de cadastro

$(document).ready(function(){

     //funçao abaixo equivalente a document.getElementById("botao-cadastrar").click()
    $("#botao-cadastrar").click(function(){

        //outra opçao seria $("#form-cadastrar").hide("slow");
        $("#form-cadastrar").slideToggle("slow");
        
        $("#section-login").slideToggle("slow");

        $("#botao-cadastrar").hide();
        
});  

});