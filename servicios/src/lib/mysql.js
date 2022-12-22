const mysql = require('mysql')

class MysqlLib{

    constructor(){
        /*this.dbSettings = {
            host : 'bt3kchazupa79ahb3prg-mysql.services.clever-cloud.com',
            user : 'uiz0z8wlwgrkot1v',
            password : 'mmoXQk3c095PQnqxUnir',
            database : 'bt3kchazupa79ahb3prg'
        }*/

        this.dbSettings = {
            host : 'localhost',
            user : 'root',
            password : '123456',
            database : 'safelife'
        }
    }

    async getConnection(){
        try{
            const pool = await mysql.createPool(this.dbSettings);
            //console.log('estas conectado');
            return pool;

        }catch(err){
            console.error(err);
        }
    }

    async querySql(sql){
        const pool = await this.getConnection();
        const data= await new Promise(function(resolve,reject){
            pool.query(sql,function(err,result,fields){
                if(!err) resolve(JSON.parse(JSON.stringify(result)));
                else reject(err);
            })
        })

        pool.end();
        return data;
    }
}

module.exports = MysqlLib;