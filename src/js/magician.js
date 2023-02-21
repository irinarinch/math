import Math1 from './math';
export default class Magician extends Math1 {
  constructor(name) {
    super(name);   
  }  
}

const mag = new Magician('mag');

mag.setDistance(1);
mag.attack = 100;
mag.stoned = true;

console.log(mag.attack);
console.log(mag);