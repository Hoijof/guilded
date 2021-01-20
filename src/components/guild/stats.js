import { AppContext } from "../world";
import React, { useContext } from "react";
import { List, Typography, Divider } from "antd";

import { getGuild, getAcceptedQuests } from "../../redux/selectors";
export default function Stats({ name, gold, members }) {
  const { state, dispatch } = useContext(AppContext);
  const guild = getGuild(state);

  const data = [
    { name: "name", value: guild.stats.name },
    { name: "gold", value: guild.stats.gold },
    { name: "members", value: guild.stats.members.length },
    { name: "Active Quests", value: getAcceptedQuests(state).length },
  ];

  return (
    <>
      <Divider orientation="left">Stats</Divider>
      <List
        size="small"
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            {item.name}: {item.value}
          </List.Item>
        )}
      />
    </>
  );
}

Stats.displayName = "Stats";
