let Hedgehog = (function () {
    let privateProps = new WeakMap();

    class Hedgehog {
        constructor(name) {
            this.name = name; // this is public
            privateProps.set(this, { speed: 1000 }); // this is private
        }

        zoom() {
            console.log(`${this.name} zooms with the speed of ${privateProps.get(this).speed} miles per second!`);
        }
    }

    return Hedgehog;
})();

export default Hedgehog;