import Daemon from '../daemon';

const daemon = new Daemon('Daemon', 'Daemon');

daemon.distance = 2;
daemon.attack = 100;

test('attack testing depending on the distance', () => {
  expect(daemon.attack).toBe(90);
});

test('testing stoned false', () => {
  daemon.stoned = false;

  expect(daemon.stoned).toBeUndefined();
});

test('testing stoned true', () => {
  daemon.stoned = true;

  expect(daemon.stoned).toBe(true);
});

test('testing stoned', () => {
  daemon.stoned = 4;

  expect(daemon.stoned).toBeUndefined();
});

test('attack testing depending on the distance and stoned', () => {
  daemon.stoned = true;
  expect(daemon.attack).toBe(85);
});
