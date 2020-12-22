function miTaggedTemplateLiteral(strings, ...values) {
  return console.log(strings, ...values);
}

let nombre = "Carlos";
let edad = 32;

miTaggedTemplateLiteral`Hola soy ${nombre} y tengo ${edad} años`;