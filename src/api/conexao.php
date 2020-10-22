<?php
abstract class Conexao{
    protected function conectaBanco(){
        try {
            $Con = new PDO("mysql:host=localhost; dbname=produtosteste","root","");
            return $Con;
        } catch (PDOException $Erro) {
            return $Erro->getMessage();
        }
    }
}
?>