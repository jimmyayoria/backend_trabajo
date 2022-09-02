const MysqlLib = require('../lib/mysql');

class EspecialidadService{

    constructor(){
        this.sql = new MysqlLib();
    }

    async getAll(){
        const sqlAll = "SELECT id,nombre FROM especialidad";
        const result = await this.sql.querySql(sqlAll);
        return result;
    }

}

module.exports = EspecialidadService;