const MysqlLib = require('../lib/mysql');

class CitasService{

    constructor(){
        this.sql = new MysqlLib();
    }

    async getAll(id_usuario){
        const sqlAll = `SELECT c.id,c.id_usuario,c.rango,c.fecha,c.id_medico,c.id_especialidad,c.estado,c.monto,m.nombre,m.apellido,e.nombre as especialidad FROM Cita c 
        inner join Medico m on (c.id_medico=m.id)
        inner join especialidad e on (c.id_especialidad=e.id)		
        where id_usuario=${id_usuario}`;
        const result = await this.sql.querySql(sqlAll);
        return result;
    }


    async getOne(id_cita){
        const sqlAll = `SELECT c.id,c.id_usuario,c.rango,c.fecha,m.nombre,m.apellido,m.imagen,m.dni,e.nombre as especialidad
        FROM Cita c inner join Medico m on (c.id_medico=m.id) inner join especialidad e on (c.id_especialidad=e.id)
        where c.id=${id_cita}`;
        const result = await this.sql.querySql(sqlAll);
        return result;
    }

    async delete(id_cita){
        const sqlAll = `Delete from Cita where id=${id_cita}`;
        const result = await this.sql.querySql(sqlAll);
        return result;
    }


    async create({cita}){

        const {id_usuario,rango,fecha,id_medico,id_especialidad,estado,monto} = cita;
 
         const sqlCreate = `insert into Cita(id_usuario,rango,fecha,id_medico,id_especialidad,estado,monto) 
                           values ('${id_usuario}', '${rango}','${fecha}','${id_medico}','${id_especialidad}','${estado}','${monto}' )`;
 
         await this.sql.querySql(sqlCreate);
         const sqlCitaCreada = "select * from Cita order by id desc limit 1";
         const result = await this.sql.querySql(sqlCitaCreada);
         return result;
     }

}

module.exports = CitasService;