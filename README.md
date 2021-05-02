# MODELO EXEMPLO DE CADASTRO EMAIL/SENHA, FAZENDO UM HASH NA SENHA E BUSCANDO A SENHA DO BANCO PELO EMAIL PARA COMPARAÇÃO

##para usar a api será necessário seguir os seguintes passos...

##-ter instalado o mySQL


##-configurar seu mySQL na pasta config(ADICIONAR SCHEMA E SENHA)


##-dar um "npm i" dentro da pasta


##-logo após "npm start"(se possuir nodemon), caso não possua abra o terminal na pasta bin e escreva "node www"

##-ROTA-"http://localhost:3000/" - PARA CADASTRO

##-ROTA-"http://localhost:3000/rs?email=SEU EMAIL" - PARA PESQUISA E COMPARAÇÃO

##-com um insomnia ou postman, envie um json com as seguintes chaves (email, senha)
