$(document).ready( function() {

    var produtos = localStorage.getItem('produtos');

    $.getJSON('json/produto.php', function() {
        $('#msg').html('Carregando produtos...');
    })
    .done( function(dados) {
        getProdutos(dados);
        dados = JSON.stringify(dados);
        localStorage.setItem('produtos', dados);
        $('#msg').html('');
    })
    .fail( function() {
        dados = JSON.parse(produtos);
        getProdutos(dados);
    });

});
