<?php

header("Content-Type:application/json");
include "conexao.php";

$op = "";

if( isset( $_GET["op"] ) )
    $op = trim( $_GET["op"] );

    if( $op == "produto" ) {
        $op = trim( $_GET["id"] );
        $consulta = $pdo->prepare("select p.*, c.categoria from produto p inner join categoria c on (c.id = p.categoria_id) where p.id = ? limit 1");
        $consulta->bindParam(1,$id);
    } else if ( $op == "categoria" ) {
        $op = trim( $_GET["id"] );
        $consulta = $pdo->prepare("select p.*, c.categoria from produto p inner join categoria c on (c.id = p.categoria_id) where p.categoria_id = ?");
        $consulta->bindParam(1,$id);
    } else {
        $consulta = $pdo->prepare("select * from produto p inner join categoria c on (c.id = p.categoria_id) order by rand() limit 4");
    }

    $consulta->execute();

    while ( $dados = $consulta->fetch(PDO::FETCH_OBJ) ) {
        $valor = number_format($dados->valor, 2, ",", ".");

        $foto = "imagens/".$dados->foto;

        $produto[] = array("id"=>$dados->id,
            "nome"=>$dados->nome,
            "descricao"=>$dados->descricao,
            "valor"=>$valor,
            "foto"=>$foto,
            "categoria"=>$dados->categoria
        );
    }

echo json_encode($produto);

?>
