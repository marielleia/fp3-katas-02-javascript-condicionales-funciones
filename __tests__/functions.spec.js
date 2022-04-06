// SEGUNDA PARTE: Las funciones en JavaScript. Lee bien los tests para averiguar qué se pide en cada momento, y crea una función que haga pasar el test.

describe("Funciones en JavaScript", () => {
    test("Las funciones pueden tener 1 parámetro", () => {
        let name = "Rosa";

        // Escribe aquí tu funcion "saludar"
        

        expect(saludar(name)).toBe("Hola, Rosa");
    })


    test("Las funciones pueden tener 2 parámetros", () => {
        let num1 = 17;
        let num2 = 10;

        // Escribe aquí tu función "suma"
        

        expect(suma(num1, num2)).toEqual(27);
    })


    test("Las funciones pueden tener múltiples parámetros", () => {
        let userName = "ada89";
        let name = "Ada Martín";
        let city = "Las Vegas";
        let weather = "soleado";
        let rainProbability = "10%";

        // Escribe aquí tu función "weatherReport" (fíjate en el 'expect' para saber qué debe retornar esta función).
        

        expect(weatherReport(userName, name, city, weather, rainProbability)).toEqual("Hola Ada Martín (ada89), hoy en Las Vegas el tiempo es soleado y las probabilidades de lluvia son del 10%.");
    })

})


// BONUS: Crea un test que te permita testear la función que verás a continuación. Para ello, también te hemos proporcionado las variables que necesitarás (y alguna más que no necesitarás, para confundir :P). 
// Recuerda quitar la puntuación de comentario (/* ... */) para que este código a continuación sea legible, e inclúyelo dentro de tu test.

/* 
let userName = "Ariana28";
let userAge = 38;
let userEmail = "ariana_28@gmail.com";
let userLocation = "Barcelona"
let userIsRegistered = true;
let password = "p4s$w0rDs3guR0";

function userAuth(userName, userEmail, password) {
    return "Welcome ${userName}, your email is ${userEmail} and your password is ${password}."
} 
*/