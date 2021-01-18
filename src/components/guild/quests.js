import React, { useContext } from 'react';
import { AppContext } from '../world';
import { Card, Typography, Space, Collapse, Button, Timeline } from 'antd';

import { getAcceptedQuests } from '../../redux/selectors';
import { getMemberCost, getMemberFullName } from '../../utils/members';
import { getHumanTime } from '../../utils/ticker/tickerUtils';
import { addLog } from '../../utils/quest/questUtils';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

export default function Quests() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Collapse >
      {getAcceptedQuests(state)
      .map((quest, key) => {
        return (
          <Panel header={`${quest.name} `} key={quest.id} extra={getStarted(quest)}>
            <Quest quest={quest} />
          </Panel>
        );
      })}
    </Collapse>
  );
}
Quests.displayName = 'Quests';

function getStarted(quest) {
  if (!quest.startedAt) {
    return 'Not yet departed';
  }

  return `Depart date: ${getHumanTime(quest.startedAt)}`
}

export function Quest({ quest }) {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <Paragraph>{quest.description}</Paragraph>
      <Paragraph>The reward for completing this quest is <Text strong>{quest.reward} gold coins</Text>.</Paragraph>
      
      <Paragraph>This quest is assigned to: {getMemberFullName(quest.assignee)} </Paragraph>

      <Title level={4}>Quest Log</Title>
      
      <Log quest={quest} />

      {quest.completed && <Button onClick={() => { 
          dispatch({ type: 'closeQuest', payload: quest});
          addLog(state, state.guild, `Finished quest ${quest.name} and earned ${quest.reward}`);
      }}>
        Close Quest 
      </Button>}
    </>
  );
}

export function Log({ quest }) {
  return (
    <Timeline mode="right">
      {quest.logs.map((log) => {
        return <Timeline.Item key={log.id} label={getHumanTime(log.createdAt)}>{log.log}</Timeline.Item>;
      })}
    </Timeline>
  )
}