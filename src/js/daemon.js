import Math1 from './math';

export default class Daemon extends Math1 {
  constructor(name) {
    super(name);   
  }  
}


const daemon = new Daemon('Daemon');

daemon.setDistance(2);
daemon.attack = 100;
daemon.stoned = true;

console.log(daemon.attack);
console.log(daemon);