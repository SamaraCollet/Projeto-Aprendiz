$(document).ready(function() {   /* tdo doc jquery tem q começar assim, código só executado após doc for carregado */
    
    /* SCROLL ON BUTTONS */
    $('.js--scroll-to-form').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
    });
    
    $('.js--scroll-to-features').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
});

function response(){
    var nome = $('#nome').val();
    var idade = $('#idade').val();
    var pastor = $('#pastor').val();
    var instrumento = $('#instrumento').val();
    var possuiInstrumento = $('#possuiInstrumento').val();
	possuiInstrumento = possuiInstrumento === "yes" ? "true" : "false";
    var fone = $('#fone').val();
    var bairro = $('#bairro').val();
    var email = $('#email').val();
    
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        url: "https://webapiprojaprendiz.azurewebsites.net/api/usuarios",
        data: JSON.stringify({nome:nome,
               idade:idade,
               pastor:pastor,
               instrumento:instrumento,
               possuiInstrumento:possuiInstrumento,
               fone:fone,
               bairro:bairro,
               email:email
              })
        ,
        success:function(msg){
			limparCampos();
            alert("Cadastro realizado com sucesso!");
        },
        error: function(msg){
            alert("OPS! Ocorreu um erro, tente novamente mais tarde");
    },
    });
}

function limparCampos(){
	$('#nome').val("");
    $('#idade').val("");
    $('#pastor').val("");
    $('#fone').val("");
    $('#bairro').val("");
    $('#email').val("");
}