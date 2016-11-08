export function loadEvents(events) {
  return {
    type: 'LOAD_EVENTS',
    events
  };
}
export function loadEvent(event) {
  return {
    type: 'LOAD_EVENT',
    event
  };
}
