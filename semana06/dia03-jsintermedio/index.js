console.log('hola js');

//arrays

const numero1 = 1
const numero2 = 2
const numero3 = 3

const listavalores = [1, 2, 3, 'victor', 'villazon', true]

console.log(listadevalores)

console.log(listadevalores[0])
console.log(listadevalores[3])

listadevalores[2] = 99

console.log(listadevalores)
listadevalores.push('javascript')

console.log(listadevalores)

listadevalores.pop()

console.log(listadevalores)

//objetos
// {key : value}
const miobjeto = {
    nombre: 'victor',
    apellido: 'villazon',
    'mi edad': 29
}

console.log(miobjeto)

console.log(miobjeto.nombre)
console.log(miobjeto.apellido)
console.log(miobjeto.edad)

//console.log(miobjeto.mi edad)

console.log(miobjeto['nombre'])
console.log(miobjeto['mi edad'])

delete miobjeto.apellido

console.log(miobjeto)

//destructuring

const nombrevalue = miobjeto.nombre

console.log(nombrevalue)

const { nombre, apellido } = miobjeto

console.log(nombre, apellido)

const {nombre: nombrevalor, apellido: apellidovalor } = miobjeto
console.log(nombrevalor, apellidovalor)

//spread operator...

const producto = {
    nombre: 'laptop',
    precio: 6800,
    producto: 'tech'
}

const cliente = {
    nombre: 'julio',
    isvip:true
}

const nuevoobjeto = { ...producto, ...cliente }
console.log(nuevoobjeto)

const nuevoobjetosincolisiones = {
    prodeucto: { ...producto},
    cliente: { ...cliente },
}

console.log(nuevoobjetosincolisiones)

console.log(object.keys(producto))
console.log(object.values(producto))
console.log(object.entries(producto))









