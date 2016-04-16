/**
 *
 * Created by juan_arillo on 16/4/16.
 *
 * Description -> Script for reading the content of a file
 * and saving it into anoher file.
 *
 */

// Importing fs and originfile library
var fs = require ("fs");

// File to use in the example
var originfile = 'loremipsum.md';
var destinyfile = 'loremipsumcopy.md';

// Writing function

function writeIntoFile(text) {
    fs.writeFile(destinyfile, text, function (err) {
        if(err){
            console.log("Error al escribir en el fichero %s", destinyfile);
            return;
        } else {
            console.log("Archivo %s creado", destinyfile);
        }
    });
}

// Reading function
function readFile(file) {
    return new Promise(function(resolve, reject){

        fs.readFile(file, 'utf8', function(err, data) {
            if (err) {
                reject(err);
                console.log("No se ha podido leer el archivo %s", originfile);
                return;
            } else {
                resolve (data);
                console.log("Se ha leido el archivo %s", originfile);
                //writeIntoFile(data);
            }
        });
        
    });
}

// Open the file
fs.open(originfile, 'r', function(err, fd) {
    if (err) {
        console.log('No se ha podido abrir el archivo %s', originfile);
        return;
    } else {
        console.log('Se ha abierto el archivo %s', originfile);
        readFile(originfile);
        fs.close(fd);
    }
});

