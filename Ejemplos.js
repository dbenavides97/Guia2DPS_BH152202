//Daniel Benavides - BH152202
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//IMPRESIÓN EN PANTALLA
console.log("Mi mensaje");
//VARIABLES
var full_nombre = "Daniel Benavides";
var age = 23;
var developer = true;
//Pruebas adicionales
console.log("Nombre:", full_nombre, "Edad: ", age);
//ARREGLOS
var skills = ['JavaScript', 'TypeScript', 'Angular'];
var numberArray = [123, 123, 1213, 1231];
//ENUMERABLES
var ROLE;
(function (ROLE) {
    ROLE[ROLE["Employee"] = 0] = "Employee";
    ROLE[ROLE["Manager"] = 1] = "Manager";
    ROLE[ROLE["Admin"] = 2] = "Admin";
    ROLE[ROLE["Developer"] = 3] = "Developer";
})(ROLE || (ROLE = {}));
var role = ROLE.Employee;
//FUNCIONES
function hello() {
}
//Funcion de variable interna
function setName(name) {
    var variableInterna = "Uriel";
    return "Hola" + name;
}
//Funcion de variable externa
var variableExterna = "Daniel";
function setNameExt(name) {
    return "Hola" + name;
}
console.log("Hola" + variableExterna);
//Objetos en TypeScript: Constructor opcional
var Persona = /** @class */ (function () {
    function Persona(_first_name, _last_name) {
        this.first_name = "_first_name";
        this.last_name = "_last_name";
    }
    return Persona;
}());
var personaUno = new Persona();
var personaDos = new Persona("Daniel");
var personaTres = new Persona("Daniel", "Benavides");
//Objetos en TypeScript: Constructor obligatorio
var Persona2 = /** @class */ (function () {
    function Persona2(_nombre, _apellido) {
        this.nombre = "_nombre";
        this.apellido = "_apellido";
    }
    return Persona2;
}());
var personaCuatro = new Persona2("Daniel", "Benavides");
//INTERPOLATION
var a = "Daniel";
var b = "Saludos a ti " + this.a;
console.log(b);
function Saludo() {
    var emojis = '(⌐■_■)';
    return "Saludos\n    " + this.last_name + ", " + this.first_name + "\n    Le enviamos un saludo desde la consola!\n    " + emojis + "\n    ";
}
var personaUNO = {
    first_name: 'Daniel',
    last_name: 'Benavides',
    twitter_account: '@dbenavides97'
};
//SHAPES
var Person = /** @class */ (function () {
    function Person() {
        this.first_name = "Daniel";
        this.last_name = "Benavides";
        this.twitter_user = "@dbenavides97";
    }
    Object.defineProperty(Person.prototype, "LastName", {
        set: function (last_name) {
            this.last_name = last_name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var myPerson = new Person();
myPerson.first_name = "Daniel";
myPerson.last_name = "Benavides";
console.log(myPerson);
//DECORATORS
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hey," + this.greeting;
        //return 
    };
    __decorate([
        enumerable(false)
    ], Greeter.prototype, "greet");
    return Greeter;
}());
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var gree = new Greeter("Soy el mensaje");
console.log(gree.greet());
