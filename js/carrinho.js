$(document).ready( function() {
    op = retornaId(6);

    console.log('Add produto ao carrinho');
    if ( op == 'add' ) {
        id = retornaId(5);
    }

    produto = localStorage.getItem('produto' + id);

    if ( !produto ) {
        $.getJSON('json/produto.php?op=produto&id=' + id, function() {
            $('.produto').html('<img src="imagens/load.gif"> Carregando produto...');
        }).done( function(dados) {
            cache = JSON.stringify(dados);
            localStorage.setItem('produto' + id, cache);
            produto = JSON.parse(cache);
        }).fail( function() {
            $('.produto').html('Erro ao carregador o produto');
        })
    }
})
