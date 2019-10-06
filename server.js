const express = require('express');
const app = express();



app.use('/api/nombres', require('./routes/api/nombres'));



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server iniciado en el puerto ${port}`));