import React, { useContext } from 'react';
import { AppContext } from '../world';
import { Typography } from 'antd';

const { Text } = Typography;

export default function Overview() {
  const { state, dispatch } = useContext(AppContext);

  return <Text>Welcome to the Tavern, please take a seat!</Text>
}

Overview.displayName = "Overview";