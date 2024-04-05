// 3. Используя dog объект, дайте ему метод с именем sayLegs. Метод должен возвращать предложение This dog has 4 legs.


let dog = {
    name: "Spot",
    numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs.";
  }
  };
  
  console.log(dog.sayLegs());



