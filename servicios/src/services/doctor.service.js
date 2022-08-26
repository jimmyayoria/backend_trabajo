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

    async getAllByEspecialidad(id_especialidad){
        const sqlAll = `select * from Medico m inner join MedicoEspecialidad mes on (m.id=mes.id_medico)
        inner join Especialidad e on (e.id=mes.id_especialidad) where e.id=${id_especialidad}`;
        const result = await this.sql.querySql(sqlAll);
        return result;
    }
    

}

module.exports = DoctorService;