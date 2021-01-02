import React, { useReducer } from "react";
import { notification, Progress, Button } from 'antd';
import { useHotkeys } from 'react-hotkeys-hook';

import ticker, { MONTHS } from '../utils/ticker';
import useInterval from '../utils/useInterval';

import reducer from '../redux/reducer';
import City from './city';
import createMember from '../utils/createMember';

import { INIT_STAGE_SPEED } from '../utils/consts';

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
    stageSpeed: INIT_STAGE_SPEED,
    stageProgress: 0,
    isPaused: false,
    notify: api,
    ticker: ticker.initialize(),
  });

  useInterval(() => {
    state.ticker.tick(dispatch, state);
  }, state.stageSpeed)

  useHotkeys('space', () => dispatch('switchPause')) 
  
  useHotkeys('+', { splitKey: '-' }, function(e){
    console.log('you pressed +');
  })
  useHotkeys("*", event => {
    if (event.key === "+") {
      dispatch({type: 'changeStageSpeed', payload: -25})
    }

    if (event.key === "-") {
      dispatch({type: 'changeStageSpeed', payload: 25})
    }
  })

  return (
    <>
      {contextHolder}
      {renderContent(dispatch, state)}
      <div id="TickerBar" style={{position: 'absolute', left: 0, bottom: 0, width: '100%'}}>
        <div>{state.ticker.day} / {MONTHS[state.ticker.month]} / {state.ticker.year}</div>
        <div>Hour: {state.ticker.hour}:00</div>
        <div>Time of The Day: {state.ticker.currentStage}</div>
        <Button onClick={() => {dispatch('switchPause')}}>{state.isPaused ? 'Resume' : 'Pause'}</Button>
        <br />
        <Button onClick={() => {dispatch({type: 'changeStageSpeed', payload: 10})}}>-</Button>
        <span> Speed: {state.stageSpeed} </span>
        <Button onClick={() => {dispatch({type: 'changeStageSpeed', payload: -10})}}>+</Button>
        <Progress percent={state.stageProgress} showInfo={false} size="small" />
      </div>
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