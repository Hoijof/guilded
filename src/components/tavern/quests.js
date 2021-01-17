import React, { useContext, useState } from "react";
import { AppContext } from "../world";
import { Card, Typography, Space, Collapse, Button, Menu, Dropdown } from "antd";
import { StarOutlined, StarFilled, DownOutlined } from '@ant-design/icons';

import { cardStyle } from "../../utils/styles";
import { getGuildMembers } from '../../redux/selectors';
import { getMemberFullName } from '../../utils/members';
import { startQuest } from "../../utils/quest";

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

function drawStarTimes(times) {
  const result = [];

  for (let i = 0; i < times; i++) {
    result.push(<StarOutlined key={i} />);
  }

  return result;
}
export default function Quests() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Collapse >
      {state.quests.quests
      .filter(quest => !quest.accepted)
      .map((quest, key) => {
        return (
          <Panel header={quest.name} key={quest.id} extra={drawStarTimes(quest.level)}>
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
      <Paragraph>The reward for completing this quest is <Text strong>{quest.reward} gold coins</Text>.</Paragraph>
      
      <Paragraph>Select the Hero that will perform this quest: <SelectHeroDropdown selectedMember={selectedMember} onChange={setSelectedMember}/> </Paragraph>

      <Button disabled={!selectedMember} onClick={() => { 
          dispatch({ type: 'startQuest', payload: {quest, selectedMember}});
          state.notify.info({
            message: `You just started ${quest.name} with ${getMemberFullName(selectedMember)}`,
          });
      }}>
        Start Quest!
      </Button>
    </>
  );
}

export function SelectHeroDropdown({ selectedMember, onChange}) {
  const { state, dispatch } = useContext(AppContext);

  const menu = (
    <Menu>
      <Menu.Item key='none' onClick={() => onChange(null)} >
        None
      </Menu.Item>
      {getGuildMembers(state).map(member => {
        return (
          <Menu.Item key={member.id} onClick={() => onChange(member)}>
            <a>
              {getMemberFullName(member)}
            </a>
          </Menu.Item>
        )
      })}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {selectedMember ? getMemberFullName(selectedMember) : 'None'} <DownOutlined />
      </a>
    </Dropdown>
  );

}