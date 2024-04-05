// 8. Создайте новый экземпляр конструктора House, вызвав его myHouse и передав несколько спален. Затем используйте , instanceof чтобы убедиться, что это экземпляр House.



function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
 
  let myHouse = new House(5);
  console.log(myHouse instanceof House);