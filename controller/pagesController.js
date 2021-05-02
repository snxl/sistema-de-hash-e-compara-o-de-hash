import serviceCadastro from "../services/serviceAtendimento.js"


const pages = {
    procurarEspecifico: (req, res) => {
        const {email} = req.query

        const senha = req.body.senha

        serviceCadastro.searchId(email, senha, res)
    },

    cadastroPOST: (req, res) =>{
        const dadosDeCadastro = req.body

        serviceCadastro.adiciona(dadosDeCadastro, res)
    }
}

export default pages