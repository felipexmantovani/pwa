<?php
    $pagina = "home";

    if( isset ( $_GET["param"] ) ) {
        $param = trim ( $_GET["param"] );
        $param = explode("/", $param);
        $pagina = $param[0];
    }

    $arquivo = $pagina.".js";
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>PWA</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <base href="http://localhost/pwa/">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" media="screen" href="css/materialize.min.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
</head>
<body>
    <div class="load">
        <img src="imagens/load.gif" alt="load">
    </div>
    <nav class="nav-extended">
        <div class="nav-wrapper">
            <a href="./" class="brand-logo"><img class="img" src="imagens/logo.png" alt="Logo"></a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

            <ul id="menu" class="right hide-on-med-and-down">
                <li>
                    <a href="carrinho" class="btn red darken-4"><i class="material-icons">shopping_cart</i></a>
                </li>
            </ul>
        </div>
    </nav>

    <ul id="mobile-demo" class="sidenav">
    </ul>

    <main class="container">
        <div id="msg"></div>

        <h1></h1>

        <div class="row produto"></div>
    </main>

    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Sub Sub Marino</h5>
                    <p class="grey-text text-lighten-4">Sua loja de La Paloma.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul id="nav-footer">
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                © 2018 Copyright
                <a class="grey-text text-lighten-4 right" href="#!">Mais links</a>
            </div>
        </div>
    </footer>

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/materialize.min.js"></script>
    <script src="js/script.js"></script>
    <script src="js/<?= $arquivo; ?>"></script>
</body>
</html>
