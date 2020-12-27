import { Button } from 'antd';

import Stats from "./stats";


export default function Overview({dispatch, state}) {
  const {gold, members} = state.guild.stats;

  return (
    <>
      <Stats {...state.guild.stats} />
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
