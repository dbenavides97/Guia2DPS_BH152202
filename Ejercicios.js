//PRESENTADO POR: DANIEL BENAVIDES - BH152202
//EJERCICIO 1: Creación de clase rombo y método para cálculo de área
var Rombo = /** @class */ (function () {
    function Rombo(_DiagonalVertical, _DiagonalHorizontal) {
        this.DiagonalVertical = _DiagonalVertical;
        this.DiagonalHoritzontal = _DiagonalHorizontal;
    }
    return Rombo;
}());
var AreaRombo = new Rombo(10, 5);
function CalculoArea() {
    var area;
    area = AreaRombo.DiagonalHoritzontal * AreaRombo.DiagonalVertical;
    return area;
}
console.log("-------------------------------------------------------------------------------");
console.log("****EJERCICIO 1: Creación de clase rombo y método para cálculo de área****");
console.log("       El valor del área del rombo es: ", CalculoArea()), "\n";
console.log("-------------------------------------------------------------------------------\n");
var superheroe = {
    nombre: 'Peter Parker',
    poderes: ['Trepar', 'Fuerza', 'Agilidad', 'Telas de araña']
};
console.log("-------------------------------------------------------------------------------");
console.log("****EJERCICIO 2: Creación de Interface Spiderman****");
console.log(superheroe);
console.log("-------------------------------------------------------------------------------\n");
//EJERCICIO 3: Creación de clase Empleado y cálculo de salario
var Empleado = /** @class */ (function () {
    function Empleado(_Nombre, _Salario) {
        this.Nombre = _Nombre;
        this.Salario = _Salario;
    }
    return Empleado;
}());
var SalarioEmpleado = new Empleado("Daniel", 1091.55);
function CalculoSalario() {
    var afp = 0.0725; //7.25% descuento de AFP
    var isss = 0.0274; //2.74% descuento de ISSS
    var renta = 0.0704; //7.04% descuento de RENTA
    var desc1 = SalarioEmpleado.Salario * afp;
    var desc2 = SalarioEmpleado.Salario * isss;
    var desc3 = SalarioEmpleado.Salario * renta;
    var descTotal = SalarioEmpleado.Salario - desc1 - desc2 - desc3;
    return descTotal;
}
console.log("-------------------------------------------------------------------------------");
console.log("****EJERCICIO 3: Creación de clase Empleado y cálculo de salario");
console.log("El salario neto de ", SalarioEmpleado.Nombre, "es de: ", CalculoSalario());
console.log("-------------------------------------------------------------------------------\n");
//EJERCICIO 4: Creación de clase Calculadora y cálculo de operaciones básicas
var Calculadora = /** @class */ (function () {
    function Calculadora(_numero1, _numero2) {
        this.numero1 = _numero1;
        this.numero2 = _numero2;
    }
    return Calculadora;
}());
var Calc = new Calculadora(20, 10);
function Calculos() {
    var suma = Calc.numero1 + Calc.numero2;
    var resta = Calc.numero1 - Calc.numero2;
    var mult = Calc.numero1 * Calc.numero2;
    var div = Calc.numero1 / Calc.numero2;
    console.log("20 + 10 = ", suma);
    console.log("20 - 10 = ", resta);
    console.log("20 x 10 = ", mult);
    console.log("20 / 10 = ", div);
}
console.log("-------------------------------------------------------------------------------");
console.log("****EJERCICIO 4: Creación de clase Calculadora y cálculo de operaciones básicas");
console.log(Calculos());
console.log("-------------------------------------------------------------------------------\n");
