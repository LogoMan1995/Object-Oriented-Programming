// 17. Измените код, чтобы отобразить правильную цепочку прототипов.



function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);
  

  Object.prototype.isPrototypeOf(Dog.prototype);

  console.log(Object.prototype.isPrototypeOf(Dog.prototype));