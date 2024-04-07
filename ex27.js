// 27. Создайте модуль с именем, funModule который будет обертывать два миксина isCuteMixin и singMixin. funModule должен вернуть объект.



let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    };
  })();

