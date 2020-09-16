import {Schema, model} from 'mongoose';

const schemaCurso = new Schema({
    nombre: String,
    profesor:String,
    anio:Number,
    estado:String

});
 
export let cursoSchema= model('schemaCurso', schemaCurso, 'cursos');
