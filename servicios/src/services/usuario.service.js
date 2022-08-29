const MysqlLib = require('../lib/mysql');

class UsuarioService{

    constructor(){
        this.sql = new MysqlLib();
    }

    async create({usuario}){

       const {dni,nombres,apellidos,telefono,edad,email,password,direccion,distrito,provincia,departamento} = usuario;

        const sqlCreate = `insert into Usuario(nombres,apellidos,dni,telefono,edad,correoElectronico,contrasenia,direccion,distrito,provincia,departamento) 
                          values ('${nombres}', '${apellidos}','${dni}','${telefono}','${edad}','${email}','${password}','${direccion}','${distrito}','${provincia}','${departamento}' )`;

        await this.sql.querySql(sqlCreate);
        const sqlUsuarioCreado = "select * from Usuario order by id desc limit 1";
        const result = await this.sql.querySql(sqlUsuarioCreado);
        return result;
    }

    async VerificarEmailRepetido(email){

        const sqlAll = `SELECT COUNT(*) AS CANTIDAD FROM Usuario WHERE correoElectronico='${email}'`;
        const result = await this.sql.querySql(sqlAll);
        return result;
        
    }

    async login(email,password){
        const sqlAll = `SELECT id,nombres,apellidos,dni,telefono,edad,correoElectronico,contrasenia,direccion,distrito,provincia,departamento FROM Usuario where correoElectronico='${email}' and contrasenia='${password}'`;
        const result = await this.sql.querySql(sqlAll);
        return result;
    }

    async getOne({id}){
        const sqlAll = `SELECT nombres,apellidos,dni,telefono,edad,correoElectronico,contrasenia,direccion,distrito,provincia,departamento FROM Usuario where id=${id}`;
        const result = await this.sql.querySql(sqlAll);
        return result;
    }

}

module.exports = UsuarioService;