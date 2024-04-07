// 13. Напишите joinDogFraternity функцию, которая принимает candidate параметр и, используя это constructor свойство, возвращает значение true, если кандидат является Dog, в противном случае возвращает false.



function Dog(name) {
    this.name = name;
  }
  
  let candidate = new Dog();
  function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
      return true;
    }
  else{
    return false;
  }
  }
  
  joinDogFraternity(candidate);

