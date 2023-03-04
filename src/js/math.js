export default class Math1 {
  constructor(name) {
    this.name = name;
  }

  set distance(x) {
    this._distance = x;
  }

  get distance() {
    return this._distance;
  }

  set attack(attack) {
    this._attack = attack - (attack * (this.distance - 1) * 0.1);
  }

  get attack() {
    if (this._stoned === true) {
      this._attack -= Math.log2(this.distance) * 5;
    }

    return this._attack;
  }

  set stoned(stoned) {
    if (stoned === true) {
      this._stoned = true;
    } else {
      delete this._stoned;
    }
  }

  get stoned() {
    return this._stoned;
  }
}
