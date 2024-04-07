// 16. Используйте для isPrototypeOf проверки .prototype beagle.



function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  Dog.prototype.isPrototypeOf(beagle);
  console.log(Dog.prototype.isPrototypeOf(beagle));

