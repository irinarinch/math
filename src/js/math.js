export default class Math1 {
  constructor(name) {
    this.name = name;     
  }

  setDistance(x) {
    this.distance = x;
  }

  set attack(attack) {    
    this._attack = attack - (attack * (this.distance - 1)*0.1);
  }

  get attack() {
    return this._attack;
  }

  set stoned(stoned) {   
    if (stoned === true) {
      this._stoned = this.attack - Math.log2(this.distance) * 5;
    }     
  }

  get stoned() {
    return this._stoned;
  }
}



