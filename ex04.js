// 4. Измените dog.sayLegs метод, чтобы удалить все ссылки на dog. Используйте duck пример для руководства.



let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();



