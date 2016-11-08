export default function events(state=[], action) {
  switch (action.type) {
    case 'LOAD_EVENTS':
      return action.events
    default:
      return state;
  }

}