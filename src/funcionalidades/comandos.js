import datos from '../archivo/datos.txt';
import datos2 from '../archivo/datos2.txt';
import { propertiesToJson } from 'properties-file/content'


let datojson={};
let arrayDatos=[];
const leerArchivoTxt=()=>{
    fetch(datos)
    .then((txt)=>txt.text())
    .then((respuesta)=>{
        console.log(respuesta)
        document.getElementById('idtexto').innerText=respuesta;
    
    });
}

const leerArchivoJson=()=>{
    fetch(datos2)
    .then((txt)=>txt.text())
    .then((respuesta)=>{
        console.log(respuesta)
        document.getElementById('idtexto').innerText=respuesta;
        arrayDatos=propertiesToJson(respuesta)
        console.log('json-->',arrayDatos)
    
    });
}

const separarString = (value) => value.split(/\r\n|\r|\n/,-1);


const leerArchivoArray=()=>{
    fetch(datos)
    .then((txt)=>txt.text())
    .then((respuesta)=>{
        console.log(respuesta)
        document.getElementById('idtexto').innerText=respuesta;
   
        console.log( 'array-->',separarString(respuesta))
        arrayDatos=separarString(respuesta);
        //recorrer un array

        arrayDatos.forEach((elemento,index)=>{
            console.log('index ',index+' elemento-->'+elemento);
        });
    
    });
}

export default {leerArchivoTxt,leerArchivoArray,leerArchivoJson}