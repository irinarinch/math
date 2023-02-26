import Math1 from './math';

export default class Daemon extends Math1 {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}
