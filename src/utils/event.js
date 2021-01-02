export default function createEvent(start, end, name, description, type, startHandler, endHandler) {
  return {
    start,
    end,
    name,
    description,
    type,
    startHandler,
    endHandler
  };
}

export const EVENT_TYPES = {
  QUEST: 'QUEST',
  EVENT: 'EVENT'
};