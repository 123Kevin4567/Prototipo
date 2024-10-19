let palabra = "Lorem ipsum dolor sit amet odio odio odio odio odio odio consectetur adipisicing elit. Ea aspernatur ab eius doloremque quibusdam dolores magnam dolor natus aut. Facilis veritatis incidunt labore cupiditate qui voluptatem illo quo mollitia porro?";


// let exprecion = /odio/gi;
// let exprecion = /odio{2,3}/gi;
// let exprecion = /[a-zA-Z]/gi;
// let exprecion = /[0-9]/gi;
// let exprecion = /[\d]/gi;
let exprecion = /[\D]/gi;

console.log(exprecion.test(palabra));

console.clear();



let correo = "kevinpolodr@gmail.com"

let exp = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+(\.[a-zA-z]{2,4}){1,2}/;

console.log(exp.test(correo));


let show = function() {};

(function() {})(
    console.log("anonima")
);

(function(d,w,c) {
    console.log(d);
})(document,window,console);

