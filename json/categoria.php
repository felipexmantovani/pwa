<?php

header("Content-Type:application/json");
include "conexao.php";
$consulta = $pdo->prepare("select * from categoria");
$consulta->execute();

while ( $dados = $consulta->fetch(PDO::FETCH_OBJ) ) {
    $categoria[] = array("id"=>$dados->id,"categoria"=>$dados->categoria);
}

echo json_encode($categoria);

 ?>
