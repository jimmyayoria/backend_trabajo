const express = require('express');
//const {config} = require('../config');
const cors = require('cors');

const medicoApi = require('./routes/doctor.route');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'servidor activo'
    })
});

medicoApi(app);



//app.use('/',require('../routes/usuario.routes'));

app.listen(5000,function(){
    console.log(`ms usuarios : http://localhost:5000`);
})
