export function createEvent(
  start,
  end,
  name,
  description,
  type,
  startHandler,
  endHandler
) {
  return {
    start,
    end,
    name,
    description,
    type,
    startHandler,
    endHandler,
  };
}

export function rescheduleEvent(event, startDate, endDate) {
  return createEvent(
    startDate,
    endDate,
    event.name,
    event.description,
    event.type,
    event.startHandler,
    event.endHandler
  );
}

export default {
  createEvent,
  rescheduleEvent,
};
