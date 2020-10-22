<?php
include("conexao.php");
class Lista extends Conexao {

    public function exibeLista()
    {
        $BFetch = $this->conectaBanco()->prepare("select * from login");
        $BFetch ->execute();

        $j = [];
        $i = 0;

        while ($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)) {
            $j[$i] =[
                "login"=>$Fetch['login'],
                "senha"=>$Fetch['senha'],
            ];
            $i++;
        }
        
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($j);
    }
}
?>