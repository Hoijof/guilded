export function getTicker(state) {
  return state.ticker;
}

export function getGuildDefaultMenu(state) {
  return state.guild.selectedItem;
}

export function getActiveEvents(state) {
  return getTicker(state).activeEvents;
}