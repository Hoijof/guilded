
import { Card, Typography, Space, Collapse } from 'antd';


import renderStats, {sumStats} from '../../../utils/renderStats';
import { cardStyle } from '../../../utils/styles';


const { Text } = Typography;
const { Panel } = Collapse;

export default function Members({dispatch, state}) {

  return (
    <>
      {state.guild.stats.members.map((member, key) => {
        return (
          <Card key={key} style={cardStyle} title={member.name} extra={<div style={{width: 15, height: 15, background: member.color}}></div>}>
            <Space style={{width: '100%'}} direction="vertical">
              <Text>Gold: {member.gold} <Text style={{fontSize: 18, cursor: 'pointer'}} onClick={() => {dispatch({type: "addGoldToMember", payload: member})}}>+</Text></Text>
              <Text>Level: {member.level} ({member.exp} / {member.level * 2}) {member.exp > member.level * 2 ? '▲' : null}</Text>
              <Text>Type: {member.type}</Text>
              <Text>Task: {member.task ? member.task : "None"}</Text>
              <Collapse ghost style={{marginLeft: -15}}>
                <Panel header={`Stats (${sumStats(member)})`} key="1">
                  <Space style={{width: '100%'}} direction="vertical">
                    {renderStats(member)}
                  </Space>
                </Panel>
              </Collapse>
            </Space>
          </Card>);
      })}
    </>
  )
}