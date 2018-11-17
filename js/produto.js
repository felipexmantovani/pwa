$(document).ready( function() {
    id = retornaId(5);

    if ( id == undefined ) {
        alert('Produto inexistente');
        location.href('index.php');
    } else {
        produto = localStorage.getItem('produto' + id);

        if (produto) {
            dados = JSON.parse(produto);
            preencherProduto(dados);
            console.log('Produto carregado do cache');
        } else {
            $.getJSON("json/produto.php", function(){
                $(".produto").html("<p><img src='imagens/load.gif'> Carregando produto...</p>");
            }).done(function(dados){
                preencherProduto(dados);
                cache = JSON.stringify(dados);
                localStorage.setItem('produto' + id, cache);
                console.log('Produto armazenado no cache');
            }).fail(function(){
                $('.produto').html('Erro ao carregar produto');
            })
        }
    }
})

function preencherProduto(dados) {
    $.each(dados, function(key, val) {
        $('.produto').html(`
            <div class="row">
                <div class="col s12 m4 center-align">
                    <img class="responsive-img" src="${val.foto}" alt="${val.nome}" title="${val.nome}">
                    <p class="valor">R$ ${val.valor}</p>
                    <p>
                        <a class="btn red darken-4" href="carrinho/${val.id}/add" title="Adicionar no carrinho">Adicionar no carrinho</a>
                    </p>
                </div>

                <div class="col s12 m8 center-align">
                    <h3>${val.nome}</h3>
                    <p>${val.descricao}</p>
                </div>
            </div>
        `)
    })
}
