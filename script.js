class Anillo {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  unidad(cantidad) {
    cantidad = cantidad - this.cantidad;
  }
}
class Aro {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  unidad(cantidad) {
    cantidad = cantidad - this.cantidad;
  }
}
class Collar {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  unidad(cantidad) {
    cantidad = cantidad - this.cantidad;
  }
}
class Pulsera {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  unidad(cantidad) {
    cantidad = cantidad - this.cantidad;
  }
}

const anilloA = new Anillo("gladus", 21000, 1);
const anilloB = new Anillo("bustec", 30000, 3);
const anilloC = new Anillo("cluse", 33000, 8);
const aroA = new Aro("cismo", 20000, 1);
const aroB = new Aro("catmo", 18000, 2);
const aroC = new Aro("mostre", 15000, 1);
const collarA = new Collar("larsu", 19500, 5);
const collarB = new Collar("pertro", 11000, 2);
const pulseraA = new Pulsera("ketru", 35000, 4);
const pulseraB = new Pulsera("serus", 20000, 1);
console.log(anilloA);

let saldo = 200000;
let seguir = "SI";

while (seguir == "SI") {
  alert("usted tiene un saldo de: " + saldo);
  seguir = prompt("Desea comprar algun articulo? Si/No");
  seguir = seguir.toUpperCase();
  console.log(seguir);
  let comprar = prompt(
    "Elige un numero dependiendo el articulo para comprar: Anillo (1-3), Aro (4-6), Collar (7-8), Pulsera (9-10)"
  );
  switch (comprar) {
    case "1":
      if (saldo >= anilloA.precio && anilloA.cantidad > 0) {
        alert("Usted adquirio el " + anilloA.nombre);
        anilloA.cantidad--;
        saldo = saldo - anilloA.precio;
        console.log(anilloA);
      } else {
        if (saldo < anilloA.precio) {
          alert("Saldo insuficiente para comprar este articulo");
        } else {
          alert("No hay mas unidades de este articulo");
        }
      }

      break;
    case "2":
      if (saldo >= anilloB.precio && anilloB.cantidad > 0) {
        alert("Usted adquirio el " + anilloB.nombre);
        anilloB.cantidad--;
        saldo = saldo - anilloB.precio;
        console.log(anilloB);
      } else {
        if (saldo < anilloB.precio) {
          alert("Saldo insuficiente para comprar este articulo");
        } else {
          alert("No hay mas unidades de este articulo");
        }
      }

      break;
    case "3":
      if (saldo >= anilloC.precio && anilloC.cantidad > 0) {
        alert("Usted adquirio el " + anilloC.nombre);
        anilloC.cantidad--;
        saldo = saldo - anilloC.precio;
        console.log(anilloC);
      } else {
        if (saldo < anilloC.precio) {
          alert("Saldo insuficiente para comprar este articulo");
        } else {
          alert("No hay mas unidades de este articulo");
        }
      }
      break;
    case "4":
      if (saldo >= aroA.precio && aroA.cantidad > 0) {
        alert("Usted adquirio el " + aroA.nombre);
        aroA.cantidad--;
        saldo = saldo - aroA.precio;
        console.log(aroA);
      } else {
        if (saldo < aroA.precio) {
          alert("Saldo insuficiente para comprar este articulo");
        } else {
          alert("No hay mas unidades de este articulo");
        }
      }
      break;
    case "5":
      if (saldo >= aroB.precio && aroB.cantidad > 0) {
        alert("Usted adquirio el " + aroB.nombre);
        aroB.cantidad--;
        saldo = saldo - aroB.precio;
        console.log(aroB);
      } else {
        if (saldo < aroB.precio) {
          alert("Saldo insuficiente para comprar este articulo");
        } else {
          alert("No hay mas unidades de este articulo");
        }
      }
      break;
    case "6":
      if (saldo >= aroC.precio && aroC.cantidad > 0) {
        alert("Usted adquirio el " + aroC.nombre);
        aroC.cantidad--;
        saldo = saldo - aroC.precio;
        console.log(aroC);
      } else {
        if (saldo < aroC.precio) {
          alert("Saldo insuficiente para comprar este articulo");
        } else {
          alert("No hay mas unidades de este articulo");
        }
      }
      break;
    case "7":
      if (saldo >= collarA.precio && collarA.cantidad > 0) {
        alert("Usted adquirio el " + collarA.nombre);
        collarA.cantidad--;
        saldo = saldo - collarA.precio;
        console.log(collarA);
      } else {
        if (saldo < collarA.precio) {
          alert("Saldo insuficiente para comprar este articulo");
        } else {
          alert("No hay mas unidades de este articulo");
        }
      }
      break;
    case "8":
      if (saldo >= collarB.precio && collarB.cantidad > 0) {
        alert("Usted adquirio el " + collarB.nombre);
        collarB.cantidad--;
        saldo = saldo - collarB.precio;
        console.log(collarB);
      } else {
        if (saldo < collarB.precio) {
          alert("Saldo insuficiente para comprar este articulo");
        } else {
          alert("No hay mas unidades de este articulo");
        }
      }
      break;
    case "9":
      if (saldo >= pulseraA.precio && pulseraA.cantidad > 0) {
        alert("Usted adquirio el " + pulseraA.nombre);
        pulseraA.cantidad--;
        saldo = saldo - pulseraA.precio;
        console.log(pulseraA);
      } else {
        if (saldo < pulseraA.precio) {
          alert("Saldo insuficiente para comprar este articulo");
        } else {
          alert("No hay mas unidades de este articulo");
        }
      }
      break;
    case "10":
      if (saldo >= pulseraB.precio && pulseraB.cantidad > 0) {
        alert("Usted adquirio el " + pulseraB.nombre);
        pulseraB.cantidad--;
        saldo = saldo - pulseraB.precio;
        console.log(pulseraB);
      } else {
        if (saldo < pulseraB.precio) {
          alert("Saldo insuficiente para comprar este articulo");
        } else {
          alert("No hay mas unidades de este articulo");
        }
      }
      break;
    default:
      alert("ingrese un numero del 1-10");
      break;
  }
}

console.log(anilloA);
console.log(anilloB);
console.log(anilloC);
console.log(aroA);
console.log(aroB);
console.log(aroC);
console.log(collarA);
console.log(collarB);
console.log(pulseraA);
console.log(pulseraB);
console.log(saldo);
