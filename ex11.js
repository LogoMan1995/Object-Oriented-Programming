// 11. beagle добавьте в массив все собственные свойства ownProps. Добавьте все prototype свойства Dog в массив prototypeProps.



function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for(let key in beagle){
    if(beagle.hasOwnProperty(key)){
      ownProps.push(key)
    }
    else{
      prototypeProps.push(key)
    }
  }
  
