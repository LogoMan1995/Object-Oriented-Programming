// 7. Создайте еще один Dog конструктор. На этот раз настройте его на прием параметров nameи color и зафиксируйте свойство numLegs на 4. Затем создайте новое, Dog сохраненное в переменной terrier. Передайте ему две строки в качестве аргументов для свойств nameи color.



function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog("George", "White");
  console.log(terrier);
  

