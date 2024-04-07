// 19. Используйте Object.create для создания двух экземпляров Animal именованных duck и beagle.



function Animal() { }


Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck = Object.create(Animal.prototype)
let beagle = Object.create(Animal.prototype)


duck.eat();
beagle.eat()

