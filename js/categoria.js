$(document).ready( function() {

    id = retornaId();

    produto = localStorage.getItem('categoria' + id);

    if (produto) {
        dados = JSON.parse(produtos);
        getProdutos(dados);
    } else {
        console.log('a');
        $.getJSON('json/produto.php?op=categoria&id=' + id, function() {
            console.log('b');
            $('.produto').html('Carregando produtos...');
        })
        .done( function(dados) {
            getProdutos(dados);
            cache = JSON.stringify(dados);
            localStorage.setItem('categoria'+id, cache)
        })
        .fail( function() {
            $('.produto').html('Erro ao carregar produtos!');
        });
    }

});
