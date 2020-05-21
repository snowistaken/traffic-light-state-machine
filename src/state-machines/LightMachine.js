import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  // Your state machine blueprint here
    id: 'light',
    initial: 'GreenOn',
    states: {
      GreenOn: { on: { changeLight: 'YellowOn' } },
      YellowOn: { on: { changeLight: 'RedOn' } },
      RedOn: { on: { changeLight: 'GreenOn'} }
    }
});

const service = interpret(lightMachine);

export { lightMachine, service };