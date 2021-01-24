import React, { useContext } from "react";
import { AppContext } from "../world";
import { Card, Typography, Space, Collapse, Button } from "antd";

const { Title, Text } = Typography;
const { Panel } = Collapse;

export default function Reports() {
  const { state, dispatch } = useContext(AppContext);

  const { reports } = state.guild;

  return (
    <>
      <RenderReport
        currentTitle="Today"
        current={reports.today}
        previousTitle="Yesterday"
        previous={reports.yesterday}
      />
      {/* <RenderReport
        currentTitle="This Week"
        current={reports.week}
        previousTitle="Last Week"
        previous={reports.lastWeek}
      /> */}
      <RenderReport
        currentTitle="This Month"
        current={reports.month}
        previousTitle="Last Month"
        previous={reports.lastMonth}
      />
    </>
  );
}
Reports.displayName = "Reports";

export function RenderReport({
  currentTitle,
  current,
  previousTitle,
  previous,
}) {
  return (
    <>
      <div style={{ width: 300, float: "left" }}>
        <Card title={currentTitle}>
          <Typography.Paragraph>Quests: {current.quests}</Typography.Paragraph>
          <Typography.Paragraph>
            maintenance: {current.maintenance}
          </Typography.Paragraph>
          <Typography.Paragraph>
            salaries: {current.salaries}
          </Typography.Paragraph>
          <Typography.Paragraph>total: {current.total}</Typography.Paragraph>
          <Typography.Paragraph>
            questsPerformed: {current.questsPerformed}
          </Typography.Paragraph>
          <Typography.Paragraph>
            questsSucceeded: {current.questsSucceeded}
          </Typography.Paragraph>
          <Typography.Paragraph>
            questsFailed: {current.questsPerformed - current.questsSucceeded}
          </Typography.Paragraph>
        </Card>
      </div>

      <div style={{ width: 300, float: "left" }}>
        <Card title={previousTitle}>
          <Typography.Paragraph>Quests: {previous.quests}</Typography.Paragraph>
          <Typography.Paragraph>
            maintenance: {previous.maintenance}
          </Typography.Paragraph>
          <Typography.Paragraph>
            salaries: {previous.salaries}
          </Typography.Paragraph>
          <Typography.Paragraph>total: {previous.total}</Typography.Paragraph>
          <Typography.Paragraph>
            questsPerformed: {previous.questsPerformed}
          </Typography.Paragraph>
          <Typography.Paragraph>
            questsSucceeded: {previous.questsSucceeded}
          </Typography.Paragraph>
          <Typography.Paragraph>
            questsFailed: {previous.questsPerformed - previous.questsSucceeded}
          </Typography.Paragraph>
        </Card>
      </div>
    </>
  );
}
