import React, { useContext, useState } from "react";
import { AppContext } from "../world";
import {
  Card,
  Typography,
  Space,
  Collapse,
  Button,
  Menu,
  Dropdown,
} from "antd";
import { StarOutlined, StarFilled, DownOutlined } from "@ant-design/icons";

import { getGuildMembers, getTicker } from "../../redux/selectors";
import { getMemberFullName } from "../../utils/members";
import {
  getDifference,
  getHumanTime,
  getCurrentTime,
} from "../../utils/ticker/tickerUtils";

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

function drawStarTimes(times) {
  const result = [];

  for (let i = 0; i < times; i++) {
    result.push(<StarOutlined key={i} />);
  }

  return result;
}

function renderExpireTime(state, quest) {
  const difference = getDifference(
    getCurrentTime(getTicker(state)),
    quest.expiresAt
  );
  let type = "secondary";
  if (difference < 24) {
    type = difference < 0 ? "danger" : "warning";
  }

  return <Text type={type}> Expires: {getHumanTime(quest.expiresAt)} </Text>;
}
export default function Quests() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Collapse>
      {state.quests.quests
        .filter((quest) => !quest.accepted)
        .map((quest, key) => {
          return (
            <Panel
              header={`${quest.name} (${quest.reward} coins)`}
              key={quest.id}
              extra={[
                renderExpireTime(state, quest),
                ...drawStarTimes(quest.level),
              ]}
            >
              <Quest quest={quest} />
            </Panel>
          );
        })}
    </Collapse>
  );
}
Quests.displayName = "Quests";

export function Quest({ quest }) {
  const { state, dispatch } = useContext(AppContext);
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <Paragraph>{quest.description}</Paragraph>
      <Paragraph>
        The reward for completing this quest is{" "}
        <Text strong>{quest.reward} gold coins</Text>.
      </Paragraph>

      <Paragraph>
        Select the Hero that will perform this quest:{" "}
        <SelectHeroDropdown
          selectedMember={selectedMember}
          onChange={setSelectedMember}
        />{" "}
      </Paragraph>

      <Button
        disabled={!selectedMember}
        onClick={() => {
          dispatch({ type: "acceptQuest", payload: { quest, selectedMember } });
          state.notify.info({
            message: `You just accepted ${quest.name} with ${getMemberFullName(
              selectedMember
            )}`,
          });
        }}
      >
        Start Quest!
      </Button>
    </>
  );
}

export function SelectHeroDropdown({ selectedMember, onChange }) {
  const { state, dispatch } = useContext(AppContext);

  const menu = (
    <Menu>
      <Menu.Item key="none" onClick={() => onChange(null)}>
        None
      </Menu.Item>
      {getGuildMembers(state)
        .filter((member) => !member.task)
        .map((member) => {
          return (
            <Menu.Item key={member.id} onClick={() => onChange(member)}>
              <a>{getMemberFullName(member)}</a>
            </Menu.Item>
          );
        })}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {selectedMember ? getMemberFullName(selectedMember) : "None"}{" "}
        <DownOutlined />
      </a>
    </Dropdown>
  );
}
