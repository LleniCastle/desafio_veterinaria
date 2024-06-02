const fs = require ('fs') 

//REGISTRAR
const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json','utf8'))
    const id = Math.floor(Math.random() *100).toString()
    if(!nombre || !edad || !nombre || !tipo || !color || !enfermedad ){
        console.error('Faltan datos que agregar')
        return
    }
    citas.push({ id,nombre, edad, tipo, color, enfermedad })
    fs.writeFileSync('citas.json', JSON.stringify(citas));
};

//LEER
const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8' ))
    console.log(citas);
}


module.exports = {registrar, leer} 
