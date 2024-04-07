// 24. Создайте примесь с именем glideMixin, определяющую метод с именем glide. Затем используйте , glideMixin чтобы дать и то, и другое bird, а также boat возможность скользить.



let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
 
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Gliding!");
    };
  };
  
  glideMixin(bird);
  glideMixin(boat);
