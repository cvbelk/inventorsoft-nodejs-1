// import Hedgehog from './hedgehog-factory.js';
// import Hedgehog from './hedgehog-weakmap-namespaces.js';
// import Hedgehog from './hedgehog-symbols.js';

showHedgehog(); // undefined

function showHedgehog() {
    const sonic = new Hedgehog();
    sonic.zoom();

    console.log(sonic.name); //valid value
    console.log(sonic.speed);
}
