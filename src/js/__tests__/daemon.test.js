import Daemon from '../daemon';

const daemon = new Daemon('Daemon', 'Daemon');
daemon.distance = 2;
daemon.attack = 100;

test('attack testing depending on the distance', () => {
  expect(daemon.attack).toBe(90);
});

test('testing stoned', () => {
  daemon.stoned = false;

  expect(daemon.attack).toBe(90);
});

test('attack testing depending on the distance and stoned', () => {
  daemon.stoned = true;

  expect(daemon.stoned).toBe(85);
});
