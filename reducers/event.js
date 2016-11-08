export default function event(state={}, action) {
  switch (action.type) {
    case 'LOAD_EVENT':
      return action.event
    default:
      return state;
  }

}