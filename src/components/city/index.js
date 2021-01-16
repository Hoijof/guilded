import React, { useContext } from 'react';
import { AppContext } from '../world';

import { Layout } from "antd";

import CityMenu from './city-menu';
import Overview from './city-overview';
import Guild from '../guild';
import Market from '../market';
import Tavern from '../tavern';

const { Sider, Content } = Layout;


export default function City() {
  const { state, dispatch } = useContext(AppContext);

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
        <CityMenu />
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
      return <Overview />
    case 'Guild':
      return <Guild />
    case 'Market': 
      return <Market />
    case 'Tavern': 
      return <Tavern />

    default:
      return "No content for City";
  }
}