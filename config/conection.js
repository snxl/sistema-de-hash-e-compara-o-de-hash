import mysql from "mysql"

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "coloque a sua ué",
    database: "ivens"
})

export default connection