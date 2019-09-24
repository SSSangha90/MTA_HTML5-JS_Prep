class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed += speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");
  animal.run(5)
  animal.stop()

 class Rabbit {
    constructor(name) {
      this.name = name;
    }
    hide() {
      console.log(`${this.name} hides!`);
    }
  }
  
  let rabbit = new Rabbit("My rabbit");
  rabbit.hide()
  
  

  // Fox to extend Animal
  // inherit from animal using "extends"
  class Fox extends Animal {
      prey() {
        console.log(`${this.name} Preys on Rabbits!`);
      }
  }

  let fox = new Fox('Mr Fox');

  // now can use Animal methods with the Rabbit Class
  fox.run(10)
  fox.prey()


  // shorter classes with 'extends' inheritance
  class Wolf extends Fox {
      age(age){
          this.age = age;
          console.log(`${this.name} is going strong at ${this.age}`)
      }
  }

  let wolf = new Wolf('Wolfster');
  // method taken from Fox.prototype
  wolf.prey()
  // method taken from Animal.prototype
  wolf.age(10)

  // Overriding a method
  class Rhino extends Animal {
      stop(){
          // this will be used instead of Animal protoype
          console.log(`${this.name} has decided to stop!`)
      }
  }

  let rhino = new Rhino('Bert');
  rhino.stop()

  // Rather than replace a method, build on top with "super" keyword
  