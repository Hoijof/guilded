import { getActiveEvents } from '../../redux/selectors';

export default function CityOverview({dispatch, state}) {
  return (
    <>
      <h1>Overview</h1>

      <h3>Active Events</h3>
      
      {getActiveEvents(state).map((event) => (<div key={event.name}>{event.name}</div>))}
    </>
  );
}
