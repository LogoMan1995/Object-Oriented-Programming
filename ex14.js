// 14. Добавьте свойство numLegs и два метода eat() в describe() of prototype, Dog установив prototype новый объект.



function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
   numLegs:4,
   eat:function () {
       console.log("pedigree");
   },
  describe: function() {
     console.log("My name is " + this.name);
  }
  };

