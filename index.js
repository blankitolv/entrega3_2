const express = require('express');
const app = express();
const productosRouter = require ('./routes/productos')
const homeRouter = require ('./routes/home')
const PORT = process.env.PORT || 8080


app.use(express.json());
app.use(express.urlencoded({extended:true}))
// luego del cambio, tengo que poner la ruta
app.use('/api/productos',productosRouter)
app.use('/',homeRouter)

app.use("/static",express.static("public"));
app.use("/docs",express.static("docs"));
 
app.listen(
     PORT,
     () => console.log(`server is running on http://localhost:${PORT}`)
)