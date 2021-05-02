import connection from "../config/conection.js";
import bcrypst from "bcryptjs"


class Atendimentos {
    adiciona(dados, res){

             const newData = {
                ...dados,
                senha: bcrypst.hashSync(dados.senha, 12)
            }
            const sql = "INSERT INTO ivens SET ?"
    
            connection.query(sql, newData, (err, results) => {
                if(err){
                    res.status(400).json(err)
                }else{
                    res.status(201).json({...newData, results})
                }
            })
    }

    searchId(email, senha, res){
        const sql = `SELECT senha FROM ivens WHERE email=?`

        connection.query(sql, email, (err, resultados)=> {
            if(err){
                res.status(400).json(err)
            }else{
                const comparacao = bcrypst.compareSync(senha, resultados[0].senha)

                console.log(comparacao)
                
                comparacao == true? res.status(200).json("Comparação correta"): res.status(400).json("comparação errada")   
            }
        })
    }

}


export default new Atendimentos