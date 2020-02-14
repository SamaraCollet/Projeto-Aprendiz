$(document).ready(function() {
    
    getList();
});

function getList() {
    
$.get({
    url:"https://webapiprojaprendiz.azurewebsites.net/api/usuarios",
        success:function(msg){
            var list = "<table><tr><th>Nome</th><th>idade</th><th>Instrumento e classe</th><th>Bairro</th><th>Pastor</th><th>Telefone</th><th>Possui Instr.</th><th>Email</th></tr>";
            for(var i = 0;i < msg.length;i++){
                var possui = msg[i].possuiInstrumento === true? "sim" : "não"; 
                list = list + "<tr><td>" + msg[i].nome + "</td><td>" + msg[i].idade + "</td><td>" + msg[i].instrumento + "</td><td>" + msg[i].bairro +"</td><td>" + msg[i].pastor +"</td><td>" + msg[i].fone + "</td><td>" + possui + "</td><td>" + msg[i].email + "</td></tr>";
            }
            list = list + "</table>"
            $("#listAlunos").html(list);
        },
        error: function(msg){
            alert("OPS! Ocorreu um erro, tente novamente mais tarde");
        }
            
});              
}