const MysqlLib = require('../lib/mysql');

class DoctorService{

    constructor(){
        this.sql = new MysqlLib();
    }

    async getAll(){
        const sqlAll = "SELECT id,dni,nombre,apellido,imagen FROM Medico";
        const result = await this.sql.querySql(sqlAll);
        return result;
    }

}

module.exports = DoctorService;