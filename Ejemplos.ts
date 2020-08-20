//Daniel Benavides - BH152202

//IMPRESIÓN EN PANTALLA
console.log("Mi mensaje");
//VARIABLES
var full_nombre:string = "Daniel Benavides";
var age:number=23;
var developer:boolean=true;
//Pruebas adicionales
console.log("Nombre:", full_nombre, "Edad: ", age);
//ARREGLOS
var skills:Array<String> = ['JavaScript','TypeScript','Angular'];
var numberArray:number[] = [123,123,1213,1231];
//ENUMERABLES
enum ROLE{Employee, Manager, Admin, Developer}
var role:ROLE = ROLE.Employee
//FUNCIONES
function hello():void{
}
//Funcion de variable interna
function setName(name:string):string{
    var variableInterna:string = "Uriel";
    return"Hola"+name;
}
//Funcion de variable externa
var variableExterna:string = "Daniel";
function setNameExt(name:string):string{
    return"Hola"+name;
}
console.log("Hola" + variableExterna);
//Objetos en TypeScript: Constructor opcional
class Persona{
    first_name:string;
    last_name:string;
    constructor(_first_name?:string,_last_name?:string){
        this.first_name="_first_name";
        this.last_name="_last_name";
    }
}
let personaUno = new Persona();
let personaDos = new Persona("Daniel");
let personaTres = new Persona("Daniel", "Benavides");
//Objetos en TypeScript: Constructor obligatorio
class Persona2{
    nombre:string;
    apellido:string;
    constructor(_nombre:string,_apellido:string){
        this.nombre = "_nombre";
        this.apellido = "_apellido";
    }
}
let personaCuatro = new Persona2("Daniel","Benavides");
//INTERPOLATION
var a:string = "Daniel";
var b = `Saludos a ti ${this.a}`;
console.log(b);

function Saludo():string{
    let emojis = '(⌐■_■)';
    return`Saludos
    ${this.last_name}, ${this.first_name}
    Le enviamos un saludo desde la consola!
    ${emojis}
    `;
}
//INTERFACES
interface MyPersona{
    first_name:string;
    last_name:string;
    twitter_account?:string;
}
let personaUNO:MyPersona={
    first_name:'Daniel',
    last_name:'Benavides',
    twitter_account:'@dbenavides97'
}
//SHAPES
class Person{
    first_name:string;
    last_name:string;
    twitter_user:string;

    constructor(){
        this.first_name = "Daniel";
        this.last_name = "Benavides";
        this.twitter_user = "@dbenavides97";
    }
    set LastName(last_name:string){
        this.last_name = last_name;
    }
}
var myPerson = new Person();
myPerson.first_name = "Daniel";
myPerson.last_name = "Benavides";
console.log(myPerson);
//DECORATORS
class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }
    @enumerable(false)
    greet(){
       return"Hey," + this.greeting;
       //return 
    }
}
function enumerable(value:boolean){
    return function(target:any, propertyKey:string, descriptor: PropertyDescriptor){
       descriptor.enumerable = value; 
    };
}
let gree = new Greeter("Soy el mensaje");
console.log(gree.greet());