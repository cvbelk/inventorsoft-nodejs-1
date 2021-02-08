class Hedgehog {
  constructor() {
      let speed = 10000; //this is private
      this.name = 'Sonic';
      this.zoom = function () {
          // can access both name and speed from here
          console.log(`${this.name} zooms with the speed of ${speed} miles per second!`);
      }
  }

  jump() {
      // cannot access speed from here
      console.log(`${this.name} jumps on top of the building!`);
  }
}

export default Hedgehog;