import React, { useContext } from "react";
import { AppContext } from "../world";
import { Card, Typography, Space, Collapse, Button } from "antd";

import { cardStyle } from '../../utils/styles';

const { Title, Text } = Typography;
const { Panel } = Collapse;

export default function Quests() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      {state.quests.quests.map((quest, key) => {
        return (
          <Card key={key} style={cardStyle} title={quest.name}>
            <Space style={{ width: "100%" }} direction="vertical">
              <Text>name: {quest.name}</Text>
              <Text>description: {quest.description}</Text>
              <Text>reward: {quest.reward}</Text>
              <Collapse ghost style={{ marginLeft: -15 }}>
                <Panel header={`Quest Log ${quest.log.length}`} key="1">
                  <Space style={{ width: "100%" }} direction="vertical">
                    {quest.log.map((log) => (
                      <div key={log}>{log}</div>
                    ))}
                  </Space>
                </Panel>
              </Collapse>
              <Button
                type="primary"
                onClick={() => {
                  dispatch({ type: "startQuest", payload: quest });

                  state.notify.info({
                    message: `You just started ${quest.name}`,
                  });
                }}
              >
                Start quest
              </Button>
            </Space>
          </Card>
        );
      })}
    </>
  );
}
