// 18. Метод eat повторяется как в , так Cat и в Bear. Отредактируйте код в духе DRY, переместив eat метод в файл Animal supertype.



function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
    
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
    };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
    console.log("nom nom nom");
  }
  
  };

