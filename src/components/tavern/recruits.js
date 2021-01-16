import React, { useContext } from "react";
import { AppContext } from "../world";
import { Card, Typography, Space, Collapse, Button } from "antd";

import { cardStyle } from '../../utils/styles';
import renderStats, { sumStats } from '../../utils/renderStats';

const { Title, Text } = Typography;
const { Panel } = Collapse;

export default function Recruits() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <Title level={4}>Available Recruits</Title>

      {state.tavern.recruits.map((member, key) => {
        const cost = member.level * 5;
        const canHire = state.guild.stats.gold >= cost;

        return (
          <Card
            key={key}
            style={cardStyle}
            title={`${member.name} ${member.surname}`}
            extra={
              <div
                style={{ width: 15, height: 15, background: member.color }}
              ></div>
            }
          >
            <Space style={{ width: "100%" }} direction="vertical">
              <Text>
                Level: {member.level} ({member.exp} / {member.level * 2}){" "}
                {member.exp > member.level * 2 ? "▲" : null}
              </Text>
              <Text>Type: {member.type}</Text>
              <Collapse ghost style={{ marginLeft: -15 }}>
                <Panel header={`Stats (${sumStats(member)})`} key="1">
                  <Space style={{ width: "100%" }} direction="vertical">
                    {renderStats(member)}
                  </Space>
                </Panel>
              </Collapse>
              <Button
                type="primary"
                disabled={canHire ? false : true}
                onClick={() => {
                  dispatch({ type: "hireGuildMember", payload: member });

                  state.notify.info({
                    message: `You just hired ${member.name} for ${cost} gold coins`,
                  });
                }}
              >
                Hire for {cost} gold coins
              </Button>
            </Space>
          </Card>
        );
      })}
    </>
  );
}
