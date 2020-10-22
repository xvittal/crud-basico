drop database if exists produtosTeste;

create database produtosTeste;

use produtosTeste;

create table produto
(
    cod_produto int(3) not null primary key,
    nome_produto varchar(30), 
    preco_produto decimal(9,2)
);

insert into produto (cod_produto, nome_produto, preco_produto)
values
(1, 'batata', 0.59),
(2, 'batata doce', 1.58),
(3, 'fecula', 1.05),
(4, 'semilha', 0.99);