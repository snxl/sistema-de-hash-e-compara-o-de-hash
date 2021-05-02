export class Tables {

    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos() {
        const sql = "CREATE TABLE IF NOT EXISTS ivens (id int NOT NULL AUTO_INCREMENT, email varchar(100) NOT NULL,  senha varchar(500) NOT NULL ,PRIMARY KEY(id))"

        this.conexao.query(sql, err => {
            if (err) {
                console.log(err)
            } else {
                console.log("Tabela criada com sucesso")
            }
        })
    }
}

export default new Tables