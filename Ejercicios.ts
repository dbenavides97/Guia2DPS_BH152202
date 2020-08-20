//PRESENTADO POR: DANIEL BENAVIDES - BH152202

//EJERCICIO 1: Creación de clase rombo y método para cálculo de área
class Rombo{
    DiagonalVertical:number;
    DiagonalHoritzontal:number;
    constructor(_DiagonalVertical:number,_DiagonalHorizontal:number){
        this.DiagonalVertical = _DiagonalVertical;
        this.DiagonalHoritzontal = _DiagonalHorizontal;
    }
}
let AreaRombo = new Rombo(10,5);
function CalculoArea(){
    var area:number;
    area = AreaRombo.DiagonalHoritzontal * AreaRombo.DiagonalVertical;
    return area;
}
console.log("-------------------------------------------------------------------------------");
console.log("****EJERCICIO 1: Creación de clase rombo y método para cálculo de área****")
console.log("       El valor del área del rombo es: ", CalculoArea()), "\n";
console.log("-------------------------------------------------------------------------------\n");

//EJERCICIO 2: Creación de Interface Spiderman
interface Spiderman{
    nombre:string;
    poderes:string[];
}
let superheroe:Spiderman={
    nombre : 'Peter Parker',
    poderes : ['Trepar','Fuerza','Agilidad','Telas de araña']
}
console.log("-------------------------------------------------------------------------------");
console.log("****EJERCICIO 2: Creación de Interface Spiderman****")
console.log(superheroe);
console.log("-------------------------------------------------------------------------------\n");

//EJERCICIO 3: Creación de clase Empleado y cálculo de salario
class Empleado{
    Nombre:string;
    Salario:number;
    constructor(_Nombre:string,_Salario:number){
        this.Nombre=_Nombre;
        this.Salario=_Salario;
    }
}
let SalarioEmpleado = new Empleado("Daniel", 1091.55);
function CalculoSalario(){
    var afp:number = 0.0725; //7.25% descuento de AFP
    var isss:number = 0.0274; //2.74% descuento de ISSS
    var renta:number = 0.0704; //7.04% descuento de RENTA
    var desc1:number = SalarioEmpleado.Salario * afp;
    var desc2:number = SalarioEmpleado.Salario * isss;
    var desc3:number = SalarioEmpleado.Salario * renta;
    var descTotal:number = SalarioEmpleado.Salario - desc1 - desc2 - desc3;
    return descTotal;
}
console.log("-------------------------------------------------------------------------------");
console.log("****EJERCICIO 3: Creación de clase Empleado y cálculo de salario")
console.log("El salario neto de ", SalarioEmpleado.Nombre, "es de: ", CalculoSalario());
console.log("-------------------------------------------------------------------------------\n");

//EJERCICIO 4: Creación de clase Calculadora y cálculo de operaciones básicas
class Calculadora{
    numero1:number;
    numero2:number;
    constructor(_numero1:number,_numero2:number){
        this.numero1=_numero1;
        this.numero2=_numero2;
    }
}
let Calc = new Calculadora(20,10);
function Calculos(){
    var suma:number = Calc.numero1 + Calc.numero2;
    var resta:number = Calc.numero1 - Calc.numero2;
    var mult:number = Calc.numero1 * Calc.numero2;
    var div:number = Calc.numero1 / Calc.numero2;
    console.log("20 + 10 = ", suma);
    console.log("20 - 10 = ", resta);
    console.log("20 x 10 = ", mult);
    console.log("20 / 10 = ", div);
}
console.log("-------------------------------------------------------------------------------");
console.log("****EJERCICIO 4: Creación de clase Calculadora y cálculo de operaciones básicas")
console.log(Calculos());
console.log("-------------------------------------------------------------------------------\n");
