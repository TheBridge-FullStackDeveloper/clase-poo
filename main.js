let yo = {
  nombre: "yeison",
  edad: 22,
  hablar: function () {
    // yo.nombre
    console.log(this.nombre);
  },
};

yo.hablar();
yo.email = "sofia@gmail.com";
function decirNombre(obj) {
  obj.hablar = function () {
    console.log(this.nombre);
  };
}

const Mateo = {
  nombre: "Mateo",
  edad: 22,
};

const juan = {
  nombre: "Juan",
  edad: 25,
};

decirNombre(juan);
decirNombre(Mateo);

juan.hablar();
Mateo.hablar();

const coche1 = {
  modelo: "kuga",
  marca: "Ford",
  color: "gris",
};

const coche2 = {
  modelo: "a3",
  marca: "Audi",
  color: "blanco",
};

const coche3 = {
  modelo: "a3",
  marca: "Audi",
  color: "blanco",
};
// function Coche(marca, modelo, antiguedad, color, tipo) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.antiguedad = antiguedad;
//   this.color = color;
//   this.tipo = tipo;
//   this.detalles = function () {
//     return (
//       "Tu coche es un " +
//       this.marca +
//       " " +
//       this.modelo +
//       " con " +
//       this.antiguedad +
//       " años, clase " +
//       this.tipo +
//       " y color " +
//       this.color
//     );
//   };
// }

// const miCoche = new Coche("Mercedes", "Volador", "2009", "Rojo", "Automatico");
// const miCoche2 = new Coche("Ford", "Score", "1990", "Blanco", "Manual");
// console.log(miCoche.detalles());
// console.log(miCoche2.detalles());

// Pensemos en un gato. Éste tiene diferentes características, como su raza, nombre, color, tamaño, etc. El gato también cuenta con diferentes acciones, como arañar, maullar, correr, etc.

function Gato(raza, nombre, color, tamaño) {
  this.raza = raza;
  this.nombre = nombre;
  this.color = color;
  this.tamaño = tamaño;
  this.arañar = function () {
    return this.nombre + " araña";
  };
  this.maullar = function () {
    return `${this.nombre} maulla`;
  };
}

const gato1 = new Gato("persa", "Zeus", "naranja", "grande");
// console.log(gato1)
// console.log(gato1.maullar)
// console.log(gato1.arañar())

// function Libro(titulo, autor, año) {
//   this.titulo = titulo;
//   this.autor = autor;
//   this.año = año;
//   this.detalles = function () {
//     return this.titulo + " año publicación " + this.año;
//   };
// }

// function Revista(titulo, autor, año, mes) {
//   Libro.call(this, titulo, autor, año);
//   this.mes = mes;
// }

// const mag1 = new Revista("Mag One", "John Doe", "2018", "Enero");
// console.log(mag1.detalles());

// function Coche(marca, modelo, antiguedad, color, tipo) {

// }
// class Coche {
//   constructor(marca, modelo, antiguedad, color, tipo) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.antiguedad = antiguedad;
//     this.color = color;
//     this.tipo = tipo;
//   }
//   detalles() {
//     console.log(
//       `Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`
//     );
//   }
// }

// let miCocheClase = new Coche("Peugeot", "607", 2002, "rojo", "turismo");
// miCocheClase.detalles();
// console.log(miCocheClase);

// class Furgon extends Coche {
//   constructor(
//     marca,
//     modelo,
//     antiguedad,
//     color,
//     tipo,
//     taraMinima,
//     cargaUtil,
//     volumenCarga
//   ) {
//     super(marca, modelo, antiguedad, color, tipo);
//     //   this.marca = marca;
//     //   this.modelo = modelo;
//     //   this.antiguedad = antiguedad;
//     //   this.color = color;
//     //   this.tipo = tipo;
//     this.taraMinima = taraMinima;
//     this.cargaUtil = cargaUtil;
//     this.volumenCarga = volumenCarga;
//   }
// }

// let miFurgon = new Furgon(
//   "Peugeot",
//   "607",
//   2002,
//   "rojo",
//   "turismo",
//   1200,
//   768,
//   4.5
// );

class Libro {
  constructor(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
  }
  detalles() {
    return this.titulo + " año publicación " + this.año;
  }
}

class Revista extends Libro{
    constructor(titulo,autor,año,mes,editorial){
        super(titulo,autor,año)
        this.mes = mes
        this.editorial = editorial
    }
}

let revista2 = new Revista("Bravo",undefined,2000,"Julio","Grande Editorial")
console.log(revista2)

class Coche{
    static info(edad){
        console.info(`Tienes ${edad} años ${ edad >= 18 ? "y puedes conducir": "y ... ¡Sorry! Sigue esperando para conducir."}`);
    }
    constructor(marca, modelo, antiguedad, color, tipo) {
      this.marca = marca;
      this.modelo = modelo;
      this.antiguedad = antiguedad;
      this.color = color;
      this.tipo = tipo;
    }
    detalles() {
      console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
    }
  }
  Coche.info(50);
  Coche.info(8);
//   let miCoche = new Coche("Peugeot", "607", 2002, "rojo", "turismo");
