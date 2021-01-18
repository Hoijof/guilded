import React, { useContext } from 'react';
import { AppContext } from '../world';
import { Button } from 'antd';

import Stats from "./stats";


export default function Overview() {
  const { state, dispatch } = useContext(AppContext);
  const {gold, members} = state.guild.stats;

  return (
    <>
      <Stats />
      <br />
      {gold === 0 && members.length === 1 ? (
        <Button
          type="primary"
          onClick={() => {
            dispatch({ type: "askFounding" });
          }}
        >
          Ask for founding to the city council
        </Button>
      ) : null}
    </>
  );
}

Overview.displayName = "Overview";