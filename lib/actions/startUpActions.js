export const START_UP_ACTION = 'START_UP_ACTION';

export const startUpAction = () => ({
  type: START_UP_ACTION,
  success: true
});

window.startUpAction = startUpAction;
