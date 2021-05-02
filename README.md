# API-REST-MYSQL-PETSHOP

##para usar a api será necessário seguir os seguintes passos...

##-ter instalado o mySQL


##-configurar seu mySQL na pasta config


##-dar um "npm i" dentro da pasta


##-logo após "npm start"(se possuir nodemon), caso não possua abra o terminal na pasta bin e escreva "node www"

##-ROTA-"http://localhost:3000/atendimentos"

##-com um insomnia ou postman, envie um json com as seguintes chaves (cliente,pet,servico,status,observacoes,dataAgendamento)


##-atente-se com o cliente, pois ele deve ter ao menos 5 caracteres, e com o dataAgendamento que necessita ter uma data no padrão DD/MM/YYYY (caso coloque algo errado em seu post ele apresentará um erro)

##-para fazer o GET de todos os seus cadastros use -"http://localhost:3000/atendimentos"

##-para dar um GET cadastro especifico -"http://localhost:3000/atendimentos/id_example"

##-para dar um PATCH basta reenviar o json com a rota -"http://localhost:3000/atendimentos/id_example"

##-para um DELETE enviar a seguinte rota "http://localhost:3000/atendimentos/id_example"
