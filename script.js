//EJERCICIO 3: FECHA
//obten la fecha de hoy y sacala por pantalla
const fechaHoy = new Date();
console.log(fechaHoy);

/*segun el dia de la semana y la hora actual, informa 
por panatalla si estas o no en la clase M04.*/
const actualDay = new Date().getDay();
const actualHour = new Date().getHours();

console.log(actualDay, actualHour);

if (actualDay == 4 && actualHour == 11) {
  console.log("estás en M04");
} else {
  console.log("no estás en M04");
}

/*desde hoy calcula cuanto falta para tu cumpleaños*/

const today = new Date();
const cumple = new Date("2024-01-06T00:00:00");
console.log(today, cumple);
//en segundos
const bdaySeconds = Math.floor((cumple.getTime() - today.getTime()) / 1000);
console.log(`Faltan ${bdaySeconds} segundos hasta mi cumpleaños`);
//en minutos
const bdayMinutes = Math.floor((cumple.getTime() - today.getTime()) / 60);
console.log(`Faltan ${bdayMinutes} minutos hasta mi cumpleaños`);
//en hora
const bdayHours = Math.floor((cumple.getTime() - today.getTime()) / 3600);
console.log(`Faltan ${bdayHours} horas hasta mi cumpleaños`);
//en dias
const bdayDays = Math.round((cumple - today) / (1000 * 60 * 60 * 24));
console.log(`Faltan ${bdayDays} dias hasta mi cumpleaños`);
/*Mira si el dia de la merce (24/09/20xx) cae en domingo o sabado los proximos años. Informa con 20XX-dia, 
cuando el dia no sea ni domingo ni sabado, comprueba hasta 2060*/
for (let year = 2023; year <= 2060; year++) {
  const fechaMerce = new Date(`${year}-09-24`);
  const dia = fechaMerce.getDay();
  const daysWeek = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
  ];
  if (dia != 0 && dia != 6) {
    console.log(`${year}-${daysWeek[dia]}`);
  }
}

/*Crea un reloj con horas, minutos y segundos que haga tick cada segundo. El formato de salida cada segundo será. hh:mm:ss*/
// setInterval ejecuta la funcion cada X milisegundos (se repite)
const tickClock = setInterval(function () {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  console.log(hours + ":" + minutes + ":" + seconds);
}, 1000);

// setTimeout ejecuta la funcion al cabo de X milisegundos (no se repite)
setTimeout(() => clearInterval(tickClock), 5000);

//EJERCICIO1.1: ARRAY
//Escribe el código usando un for y después refactoriza y acabada con una función lambada
//dado un array con los dias de la semana obtén todos los dias que empiezan por 'M'

let diasSemana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];
let empiezanPorM = [];
//for

for (let index = 0; index < diasSemana.length; index++) {
  if (diasSemana[index].startsWith("m")) {
    empiezanPorM.push(diasSemana[index]);
  }
}

console.log(empiezanPorM);

//refactorizar
let diasM = diasSemana.filter(function (dia) {
  //elemento sobre el que se ejecuta
  return dia.startsWith("m");
});

console.log(diasM);

//funcion lambda

let letDiasConM = diasSemana.filter((dia) => dia.startsWith("m"));

console.log(letDiasConM);

//dado un array con los meses del año obtén todos los días que empiezan por una vocal.
let mesesAno = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
let empiezanPorVocal = [];

//for
for (let index = 0; index < mesesAno.length; index++) {
  if (
    mesesAno[index].startsWith("a") ||
    mesesAno[index].startsWith("e") ||
    mesesAno[index].startsWith("i") ||
    mesesAno[index].startsWith("o") ||
    mesesAno[index].startsWith("u")
  ) {
    empiezanPorVocal.push(mesesAno[index]);
  }
}

console.log(empiezanPorVocal);

//refactorizar
const mesesDelAnio = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function mesesConVocalAlInicio(meses) {
  const vocales = ["a", "e", "i", "o", "u"];
  return meses.filter((mes) => vocales.includes(mes[0].toLowerCase()));
}

const mesesConVocal = mesesConVocalAlInicio(mesesDelAnio);
console.log(mesesConVocal);

//funcion lambda
let vocales = ["a", "e", "i", "o", "u"];
let mesVocal = mesesAno.filter((mes) => vocales.includes(mes[0].toLowerCase()));

console.log(mesVocal);

//EJERCICIO 1.2:ARRAY
/*Escribe el código usando un for y después refactoriza y acaba con una función lambda.
Dado un array con los días de la semana*/
let semana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];
/*Obtén el primer día que empieza por ‘M’.*/
//for
let empiezaM = [];
for (const dia of semana) {
  if (dia.startsWith("m")) {
    empiezaM.push(dia);
  }
}

console.log(empiezaM);
//refactor
let primerM = semana.find(function (dia) {
  return dia.startsWith("m");
});

console.log(primerM);
//lambda
let diaM = semana.find((dia) => dia.startsWith("m"));
console.log(diaM);

/*Obtén la posición del día que empieza por ‘V’.*/
let empiezaV = [];
for (const dia of semana) {
  if (dia.startsWith("v")) {
    empiezaV.push(
      semana.findIndex(function (elem) {
        return elem == dia;
      })
    );
  }
}

console.log(empiezaV);
//refactor
let primerV = semana.findIndex(function (dia) {
  return dia.startsWith("v");
});

console.log(primerV);
//lambda
let diaV = semana.findIndex((dia) => dia.startsWith("V"));
console.log(diaV);

/*Indica si algún día empieza por ‘S’. */
//for
let empiezaS;

for (const dia of semana) {
  empiezaS = semana.some(function (dia) {
    return dia.startsWith("s");
  });
}
console.log(`es ${empiezaS}`);

//refactor
let primerS = semana.some(function (dia) {
  return dia.startsWith("s");
});

console.log(`es ${primerS}`);

//lambda
let diaS = semana.some((dia) => dia.startsWith("s"));
console.log(diaS);

/* Indica si todos los días acaban por ‘s’.*/
//for
let acabaS;

for (const dia of semana) {
  acabaS = semana.every(function (dia) {
    return dia.endsWith("s");
  });
}
console.log(`es ${acabaS}`);

//refactor
let acabanEnS = semana.every(function (dia) {
  return dia.endsWith("s");
});

console.log(`es ${acabanEnS}`);

//lambda
let daysEndS = semana.every((dia) => dia.endsWith("s"));
console.log(daysEndS);

//EJERCICIO 1.3:ARRAY
/*Escribe el código usando un for y después refactoriza y acaba con una función lambda.*/
/*Dado un array con las siguientes notas:*/
const notas = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0];

/*Calcula la nota media*/

//for
let sumaNotas = 0;
for (const nota of notas) {
  sumaNotas = sumaNotas + nota;
}

let media = sumaNotas / notas.length;

console.log(`la media es: ${Math.ceil(media)}`);

//refactor

//lambda

/*Obtén la primera nota superior a 5;*/
//for

//refactor

//lambda
