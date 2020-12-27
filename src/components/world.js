import React, { useReducer } from "react";
import { notification } from 'antd';

import reducer from '../redux/reducer';
import City from './city';
import createMember from '../utils/createMember';

export default function World() {
  const [api, contextHolder] = notification.useNotification();

  const [state, dispatch] = useReducer(reducer, {
    guild: {
      stats: {
        name: "Tainor",
        gold: 0,
        members: [createMember("Hoijof", "indigo")],
        items: [],
      },
      selectedItem: 'Overview' 
    },
    city: {
      selectedItem: 'Overview',
    },
    tavern: {
      recruits: [1,2,3,4,5,6,7,8,9,10].map(() => createMember())
    },
    selectedCity: 'City',
    day: 0,
    notify: api
  });


  return (
    <>
      {contextHolder}
      {renderContent(dispatch, state)}
    </>
  )
}

function renderContent(dispatch, state) {
  switch(state.selectedCity) {
    case 'City': 
      return <City dispatch={dispatch} state={state} />

    default:
      return "No city to render";
  }
}