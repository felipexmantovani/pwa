$(document).ready( function() {

    $('.load').fadeOut(1000, function() {
        $(this).hide();
    });

    var dadosCategorias = localStorage.getItem('categorias');

    if( dadosCategorias ) {
        var dados = JSON.parse(dadosCategorias);
        getCategorias(dados);
    } else {
        $.getJSON('json/categoria.php', function() {
            $('#msg').html('<p>Carregando categorias...</p>');
        })
        .done( function(dados) {
            var cache = JSON.stringify(dados);
            localStorage.setItem('categorias', cache);
            getCategorias(dados);
            $('#msg').html('');
        })
        .fail( function() {
            $('#msg').html('<p>Erro ao carregar categorias!</p>');
        });
    }

    function getCategorias(dados) {
        $.each( dados, function(key, val) {
            $('#menu, #mobile-demo, #nav-footer').prepend('<li><a href="categoria/'+ val.id +'" title="'+ val.categoria +'">'+ val.categoria +'</a></li>');
        })
    }

});

function retornaId() {
    pagina = window.location.href;
    pagina = pagina.split('/');
    return pagina[5];
}

function getProdutos(dados) {
    $('.produto').html('');
    $.each( dados, function(key, val) {
        $('.produto')
        .append(`
            <div class="col l3 m6 s12 center-align">
                <div class="card">
                    <img class="responsive-img" src="${val.foto}">
                    <p>${val.nome}</p>
                    <p class="valor">R$ ${val.valor}</p>
                    <a href="produto/${val.id}" class="btn red darken-4">Detalhes</a>
                </div>
            </div>
        `)
    });
}
