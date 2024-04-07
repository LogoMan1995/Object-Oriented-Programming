// 22. Добавьте весь необходимый код, чтобы Dog объект наследовался от Animal и Dog для конструктора prototype было установлено значение Dog. Затем добавьте bark() к Dog объекту метод, который beagle сможет использовать как eat()и bark(). Метод bark()должен вывести Woof!на консоль.



function Animal() { }
Animal.prototype.eat = function() 
{ console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function (){
  console.log('Woof!')
}

let beagle = new Dog();
beagle.bark()

