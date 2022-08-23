const MysqlLib = require('../lib/mysql');

class UsuarioService{

    constructor(){
        this.sql = new MysqlLib();
    }

    async create({usuario}){

       const {dni,nombres,apellidos,telefono,edad,email,password,direccion,distrito,provincia,departamento} = usuario;

        const sqlCreate = `insert into Usuario(nombres,apellidos,dni,telefono,edad,correoElectronico,contrasenia,direccion,distrito,provincia,departamento) 
                          values ('${nombres}', '${nombres}','${nombres}','${nombres}','${nombres}','${nombres}','${nombres}' )`;

        await this.sql.querySql(sqlCreate);
        const sqlCursoCreado = "select * from tbl_curso order by curso_id desc limit 1";
        const result = await this.sql.querySql(sqlCursoCreado);
        return result;
    }

    async VerificarEmailRepetido(){

        const sqlAll = "SELECT COUNT(*) AS CANTIDAD FROM `Usuario` WHERE correoElectronico='miguel@gmail.com'";
        const result = await this.sql.querySql(sqlAll);
        return result;
        
    }

}

module.exports = UsuarioService;