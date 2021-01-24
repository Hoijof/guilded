const defaultReport = {
  quests: 0,
  maintenance: 0,
  salaries: 0,
  total: 0,
  questsPerformed: 0,
  questsSucceeded: 0,
  logs: [],
};

export function initializeReports() {
  return {
    today: { ...defaultReport },
    yesterday: { ...defaultReport },
    week: { ...defaultReport },
    lastWeek: { ...defaultReport },
    month: { ...defaultReport },
    lastMonth: { ...defaultReport },
  };
}

export function addQuestReport(reports, quest) {
  addQuestReportTo(reports, quest, "today");
  addQuestReportTo(reports, quest, "month");
}

function addQuestReportTo(reports, quest, reportKey) {
  reports[reportKey].questsPerformed++;
  reports[reportKey].questSucceeded++;
  reports[reportKey].quests += quest.reward;
  reports[reportKey].total += quest.reward;
}

export function reportsCallADay(reports) {
  reports.yesterday = reports.today;
  reports.today = { ...defaultReport };
}

export function reportsCallAWeek(reports) {
  reports.lastWeek = reports.week;
  reports.week = { ...defaultReport };
}

export function reportsCallAMonth(reports) {
  reports.lastMonth = reports.month;
  reports.month = { ...defaultReport };
}

export function addReport(report1, report2) {
  report2.quests += report1.quests;
  report2.maintenance += report1.maintenance;
  report2.salaries += report1.salaries;
  report2.total += report1.total;
  report2.questsPerformed += report1.questsPerformed;
  report2.questsSucceeded += report1.questsSucceeded;

  report2.logs.push(...report1.logs);
}
