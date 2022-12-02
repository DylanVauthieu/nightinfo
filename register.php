<!DOCTYPE html>
<html lang = "fr">
<head>
    <style></style>
    <meta charset = "UTF-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE=edge">
    <meta name = "viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>
    <!-- navBar -->
    <div class="parent">
        <div class="nav-bar">
          <ul class="navigation-bar">
            <input class="hamburger-button" type="checkbox" id="menu-toggle" onclick="hideOrShow()">
            <label id="menu-toggle-2" class="menu-button-container hamburger-button" for="menu-toggle"><div class="menu-button"></div></label>
            <div class="menu">
              <li id="button-1" class="current"><a class="home-link" href="index.html" data-hover="Accueil" onclick="actualizeClass('button-1')">Accueil</a></li>
              <li id="button-2"><a href="./qcm/qcm.html" data-hover="QCM" onclick="actualizeClass('button-2')">QCM</a></li>
              <li id="button-3"><a href="./Video_page/video.html" data-hover="Vidéo" onclick="actualizeClass('button-3')">Vidéo</a></li>
              <li id="button-4"><a href="./movais/movais.html" data-hover="movais" onclick="actualizeClass('button-4')">movais</a></li>
              <li id="button-5"><a href="./register.html" data-hover="register" onclick="actualizeClass('button-5')">register</a></li>
            </div>
          </ul>
        </div>
    </div>

  <h1>Les inscrits !</h1>

  <php
    mysql_connect("mysql-vihpourlesnuls.alwaysdata.net","291412_root","bdd07052004*") or die("Impossible de se connecter");
    mysql_select_db("vihpourlesnuls_bdd") or die("pas possible de trouver la base");

    $result = mysql_query("SELECT * FROM user");
    $nblignes = mysql_num_rows($result);

    echo "<table><tr><td>Inscrits</td></tr>\n";
    for ($i=0;$i<$nblignes;$i=$i+1) {
        $prod_nom =  mysql_result($result,$i,"FIRSTNAME");
        $prod_prix = mysql_result($result,$i,"NAME");
        $prod_age = mysql_result($result,$i,"AGE");
        echo "<tr><td>$prod_nom</td><td>$prod_prix</td><td>$prod_age</td></tr>";
    }
    echo "</table>";
    mysql_close();
    ?>


</body>
</html>