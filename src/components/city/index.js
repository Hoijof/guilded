import { Layout } from "antd";

import CityMenu from './city-menu';
import Overview from './city-overview';
import Guild from '../guild';
import Market from '../market';
import Tavern from '../tavern';

const { Sider, Content } = Layout;


export default function City({dispatch, state}) {
  const city = state.city;

  return (
    <Layout>
      <Sider
        theme="light"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <CityMenu dispatch={dispatch} />
      </Sider>
      <Layout style={{ marginLeft: 200, height: "100vh" }}>
        <Content style={{ background: 'white', padding: 10, margin: "24px 16px 0", overflow: "initial"}}>
            {renderContent(dispatch, state)}
        </Content>
      </Layout>
    </Layout>
  );
}


function renderContent(dispatch, state) {
  switch(state.city.selectedItem) {
    case 'Overview': 
      return <Overview dispatch={dispatch} state={state} />
    case 'Guild':
      return <Guild dispatch={dispatch} state={state} />
    case 'Market': 
      return <Market dispatch={dispatch} state={state} />
    case 'Tavern': 
      return <Tavern dispatch={dispatch} state={state} />

    default:
      return "No content";
  }
}