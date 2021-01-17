export function getTicker(state) {
  return state.ticker;
}

export function getNamespacedDefaultMenu(state, stateNamespace) {
  return state[stateNamespace].selectedItem;
}

export function getActiveEvents(state) {
  return getTicker(state).activeEvents;
}

export function getGuild(state) {
  return state.guild;
}

export function getGuildMembers(state) {
  return getGuild(state).stats.members;
}