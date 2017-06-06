class Person {
  constructor(name) {
    this.nombre = name;
  }

  name() {
    return this.nombre;
  }
}

me = new Person("cristian");
console.log(me.name());
