import { Layout } from "antd";

import GuildMenu from './menu';
import Overview from './overview';
import Members from './members';

const { Header, Content } = Layout;

function renderContent(dispatch, state) {
  switch(state.guild.selectedItem) {
    case 'Overview': 
      return <Overview dispatch={dispatch} state={state} />
    case 'Members':
      return <Members dispatch={dispatch} state={state} />
    case 'Market': 
      return <Overview dispatch={dispatch} state={state} />

    default:
      return "error";
  }
}

export default function Guild({dispatch, state}) {
  
  return (
    <Layout style={{ background: 'white'}}>
      <Header
        theme="light"
        style={{
          background: 'white',
          padding: 0
        }}
      >
        <GuildMenu dispatch={dispatch} />
      </Header>
      <Content style={{ background: 'white', padding: 10, margin: "24px 16px 0", overflow: "initial"}}>
          {renderContent(dispatch, state)}
      </Content>
    </Layout>
  );
}
