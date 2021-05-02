import app from "../index.js"
import conection from "../config/conection.js"
import Tables from "../models/tables.js"


const port = process.env.PORT || '3000'
app.set('port', port)

conection.connect(err => {
    if(err){
        console.log(err)
    }else{
        console.log("server connect")

        Tables.init(conection)

        app.listen(port, () => console.log(`server running: ${port}`))
    }
})


