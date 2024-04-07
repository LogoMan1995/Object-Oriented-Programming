// 20. Измените код так, чтобы экземпляры Dog наследовались от Animal.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype)


let beagle = new Dog();
beagle.eat();