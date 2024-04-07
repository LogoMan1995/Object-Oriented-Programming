// 25. Измените способ weight объявления функции Bird, чтобы она была частной переменной. Затем создайте метод getWeight, который возвращает значение weight 15.



function Bird() {
    let weight = 15;
    this.getWeight = () => weight;  
  }

let bird = new Bird();
console.log(bird.getWeight());