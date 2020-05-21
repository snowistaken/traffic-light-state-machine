import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  // Your state machine blueprint here
    id: 'light',
    initial: 'GREEN_LIGHT',
    states: {
      GREEN_LIGHT: { on: { TOGGLE: 'YELLOW_LIGHT' } },
      YELLOW_LIGHT: { on: { TOGGLE: 'RED_LIGHT' } },
      RED_LIGHT: { on: {TOGGLE: 'GREEN_LIGHT'} }
    }
});

const service = interpret(lightMachine);

export { lightMachine, service };