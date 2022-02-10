// Create a class Animal with the attributes name, type and color
class Animal{
  constructor(name, type,color){
    this.name = name;
    this.type = type;
    this.color = color;
  }
}


// Create a class Mamal that extends from the Animal class. It has a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mamal extends Animal{
  constructor(name, type, color){
    super(name, type, color)
  }
  sound(ExpectedSound){
    this.sound = ExpectedSound;
    return `name: ${this.name}, type: ${this.type}, color: ${this.color}`
  }
}


// Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.

let myCow = new Mamal('Hava', 'Holandic', 'green');
let details = myCow.sound('Moo');
console.log(details);
console.log(myCow);
