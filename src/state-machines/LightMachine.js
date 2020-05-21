import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  // Your state machine blueprint here
    id: 'light',
    initial: 'GreenOn',
    states: {
      GreenOn: { on: { TOGGLE: 'YellowOn' } },
      YellowOn: { on: { TOGGLE: 'RedOn' } },
      RedOn: { on: {TOGGLE: 'GreenOn'} }
    }
});

const service = interpret(lightMachine);

export { lightMachine, service };