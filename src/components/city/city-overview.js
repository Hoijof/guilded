import React, { useContext } from 'react';
import { AppContext } from '../world';
import { getActiveEvents } from '../../redux/selectors';

export default function CityOverview() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <h1>Overview</h1>

      <h3>Active Events</h3>
      
      {getActiveEvents(state).map((event) => (<div key={event.name}>{event.name}</div>))}
    </>
  );
}
