const bd = {
    alumno: [{
        id: 1,
        nombre: "Pedro"
    }, {
        id: 2,
        nombre: "Maria"
    }, {
        id: 3,
        nombre: "Luis"
    }, {
        id: 4,
        nombre: "Juana"
    }, {
        id: 5,
        nombre: "Roberto"
    }, {
        id: 6,
        nombre: "Alberto"
    }, {
        id: 7,
        nombre: "Juan"
    }, {
        id: 8,
        nombre: "Tania"
    }, {
        id: 9,
        nombre: "Alejandra"
    }, {
        id: 10,
        nombre: "Enrrique"
    }, {
        id: 11,
        nombre: "Gustavo"
    }],
    curso: [{
        id: 1,
        nombre: "Programacion 1"
    }, {
        id: 2,
        nombre: "Programacion 2"
    }, {
        id: 3,
        nombre: "Ingles 1"
    }, {
        id: 4,
        nombre: "Historia"
    }, {
        id: 5,
        nombre: "Filosofia"
    }, {
        id: 6,
        nombre: "Calculo 1"
    }, {
        id: 7,
        nombre: "Introduccion a la Electronica"
    }],
    seccion: [{
        id: 1,
        curso: 6,
        alumnos: [10, 2, 1, 4]
    }, {
        id: 2,
        curso: 3,
        alumnos: [1, 2, 7, 8, 11, 6, 5]
    }, {
        id: 3,
        curso: 2,
        alumnos: [1, 6, 8, 7, 1, 5]
    }, {
        id: 4,
        curso: 3,
        alumnos: [10, 8, 7, 6, 3, 4, 2]
    }, {
        id: 5,
        curso: 7,
        alumnos: [5, 4, 7, 9]
    }]
}
console.log(bd);

module.exports = {
    bd
}

console.log(bd);